import React, { useState, useEffect } from 'react';
import { Input,Col,FormGroup,Label } from 'reactstrap';
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import DeleteComponent from '../../../masterComponents/Deletes/DeleteComponents'

const Delete=(props)=>{
    const initialState ={
        Surname: "",
        MiddleName: "",
        FirstName: "",
        UserName: "",
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
                    <Input type="text" required  value={data.Surname} name="Surname" disabled />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Middle Name</Label>
                    <Input type="text" value={data.MiddleName} name="MiddleName" disabled />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">First Name</Label>
                    <Input type="text" required value={data.FirstName} name="FirstName" disabled />
                </Col>
            </FormGroup>
              
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Contact Address</Label>
                    <Input type="text" required value={data.ContactAddress} name="ContactAddress" disabled />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Contact Phone</Label>
                    <Input type="text" required value={data.ContactPhone} name="ContactPhone" disabled />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Nationality</Label>
                    <Input type="text" value={data.Nationality} name="Nationality" disabled />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">State</Label>
                    <Input type="text" required value={data.State} name="State" disabled />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">L.G.A</Label>
                    <Input type="text" value={data.LGA} name="LGA" disabled />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Status</Label>
                    <Input type="select" name="Status" value={data.Status} disabled>
                            <option value="k">Please select...</option>    
                            <option value="0">Active</option>
                            <option value="1">Dismissed</option>
                    </Input>
                </Col>
            </FormGroup>
            
            </>
        )
    }
    const onDelete = async (event) => {
        event.preventDefault();
        setLoading(true);
        let editUrl = `teachers/delete/${data.Id}`;
        let response = await API.delete(editUrl)
        .catch(error=> {
            let rdr = resolveCode(error.response.status);
            if(rdr) props.history.push(rdr);
            if(error.response.status >= 400 && error.response.status <= 499){
              setLoading(false);
              setError(error.response.data);
            }else{
              props.history.push(resolveCode(error.response.status));
            }
        })
        setLoading(false);
        if (response && (response.status >= 200 && response.status <= 299)) {
            props.history.push("/dashboard/teachers/index")
        }
    }
    const cancel =(event) => {
        event.preventDefault();
        props.history.push("/dashboard/teachers/index");
    }
    useEffect(() => {
        setLoading(true)
        const Retrieve = async () => {
            let getUrl = `teachers/getteacher/${props.match.params.id}`;
            if(props.match.params.id === null || props.match.params.id === undefined){
                props.history.push("/dashboard/teachers/index");
            }
            let response = await API.get(getUrl)
            .catch(error=> {
                let rdr = resolveCode(error.response.status);
                if(rdr) props.history.push(rdr);
                if(error.response.status >= 400 && error.response.status <= 499){
                  setLoading(false);
                  setError(error.response.data);
                }else{
                  props.history.push(resolveCode(error.response.status));
                }
            })
                setLoading(false);
            if (response && (response.status >= 200 && response.status <= 299)) {
                setData(response.data);
            }
        }
        Retrieve();
    }, [])
    const xtics={
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: onDelete,
        Title: {
            Name: "Teacher",
            Description: "Are you sure you want to delete this class which distinguishes student's designations?"
        }
    }
    return (loading ? <Loader />: <DeleteComponent {...xtics}/> )
}
export default Delete;