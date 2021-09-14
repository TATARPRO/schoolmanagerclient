import React, { useState, useEffect } from 'react';
import { Input, Col, FormGroup, Label } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import EditComponent from '../../../masterComponents/Edits/EditComponents'

const Edit = (props) => {
    const initialState ={
        Surname: "",
        MiddleName: "",
        FirstName: "",
        ContactAddress: "",
        ContactPhone: "",
        Nationality: "",
        State: "",
        LGA: "",
        Status: 0
    }
    const [errMsg, setError] = useState("");
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Surname</Label>
                    <Input type="text" required  value={data.Surname} name="Surname" onChange={handleChange} />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Middle Name</Label>
                    <Input type="text" value={data.MiddleName} name="MiddleName" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">First Name</Label>
                    <Input type="text" required value={data.FirstName} name="FirstName" onChange={handleChange} />
                </Col>
            </FormGroup>
            
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Contact Address</Label>
                    <Input type="text" required value={data.ContactAddress} name="ContactAddress" onChange={handleChange} />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Contact Phone</Label>
                    <Input type="text" required value={data.ContactPhone} name="ContactPhone" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Nationality</Label>
                    <Input type="text" value={data.Nationality} name="Nationality" onChange={handleChange} />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">State</Label>
                    <Input type="text" required value={data.State} name="State" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">L.G.A</Label>
                    <Input type="text" value={data.LGA} name="LGA" onChange={handleChange} />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Status</Label>
                    <Input type="select" name="Status" value={data.Status} onChange={handleChange}>
                            <option value="k">Please select...</option>    
                            <option value="0">Active</option>
                            <option value="1">Dismissed</option>
                    </Input>
                </Col>
            </FormGroup>
            
            </>
        )
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({...data, [name]: value })
    }
    const validateData =()=>{
       
        if(data.Surname === "" || data.Surname === undefined){
            setError("The Surname field is required")
            return false
        }
        if(data.FirstName === "" || data.FirstName === undefined){
            setError("The First Name field is required")
            return false
        }
        if(data.ContactAddress === "" || data.ContactAddress === undefined){
            setError("The Contact Address field is required")
            return false
        }
        if(data.ContactPhone === "" || data.ContactPhone === undefined){
            setError("The Contact Phone field is required")
            return false
        }
        if(data.Nationality === "" || data.Nationality === undefined){
            setError("The Nationality field is required")
            return false
        }
        if(data.State === "" || data.Stae === undefined){
            setError("The State year field is required")
            return false
        }
        
        return true
    }
    const onSave = async (event) => {
        event.preventDefault();
        if(!validateData()) return
        setLoading(true);
        let editUrl = `teachers/update/`;
        let response = await API.put(editUrl, data)
        .catch(error=> {
            if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                props.history.push(resolveCode(error.response.status));
            }
            if(error.response && (error.response.status >= 400 && error.response.status <= 499)){
                if(resolveCode(error.response.status) != "") props.history.push(resolveCode(error.response.status))
              setLoading(false);
              setError(error.response.data);
            }
        })
        if (response.status >= 200 && response.status <= 299) {
        setLoading(false);
            props.history.push("/dashboard/Classes/index")
        }
    }
    
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/teachers/index");
    }
    useEffect(() => {
        setLoading(true)
        const Retrieve = async () => {
            let getUrl = `teachers/getteacher/${props.match.params.id}`;
            if (props.match.params.id === null || props.match.params.id === undefined) {
                props.history.push("/dashboard/teachers/index");
            }
            let response = await API.get(getUrl)
            .catch(error=> {
                if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                    props.history.push(resolveCode(error.response.status));
                }
                if(error.response && (error.response.status >= 400 && error.response.status <= 499)){
                    props.history.push(resolveCode(error.response.status));
                }
            })
            if (response && (response.status >= 200 && response.status <= 299)) {
            setLoading(false);
                setData(response.data);
            }
        }
        Retrieve();
    }, [])
    const xtics = {
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: onSave,
        Title: {
            Name: "Teacher",
            Description: "Teachers are 'guidelines' for students. Editing this info will alter the guides' data"
        }
    }
    return (loading ? <Loader /> : <EditComponent {...xtics} />)
}
export default Edit;