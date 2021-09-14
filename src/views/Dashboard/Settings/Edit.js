import React, { useState, useEffect } from 'react';
import { Input, Col, FormGroup, Label } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import EditComponent from '../../../masterComponents/Edits/EditComponents'

const Edit = (props) => {
    const initialState = {
        Id: 0,
        Name: "",
        Value: "",
        ConcurrencyStamp: ""
    }
    const [errMsg, setError] = useState("");
    const [New, setClass] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <FormGroup row>
                <Col xs="12" md="9">
                    <Label htmlFor="hf-ClassName">Setting Name</Label>
                    <Input type="text" required id="hf-ClassName" value={New.Name} name="Name" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="9">
                    <Label htmlFor="hf-ClassName">Value</Label>
                    <Input type="text" required id="hf-ClassName" value={New.Value} name="Value" onChange={handleChange} />
                </Col>
            </FormGroup>
            </>
        )
    }
    const validateData =()=>{
        if (New.Name == "" || New.Name == undefined) {
        setError("Please enter a setting name.")
        return false
    }
    if(New.Value == "" || New.Value == undefined){
        setError("Please enter a setting value")
        return false
    }
    return true
}
    const onSave = async (event) => {
        event.preventDefault();
        if(!validateData()) return
        setLoading(true);
        let editUrl = `settings/update/`;
        let response = await API.put(editUrl, New)
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
            props.history.push("/dashboard/Settings/index")
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setClass({...New, [name]: value })
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/Settings/index");
    }
    useEffect(() => {
        const Retrieve = async () => {
            let getUrl = `settings/getsetting/${props.match.params.id}`;
            if (props.match.params.id === null || props.match.params.id === undefined) {
                props.history.push("/dashboard/Settings/index");
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
                setClass(response.data);
            }
        }
        Retrieve();
    }, [])
    const xtics = {
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: onSave,
        Title: {
            Name: "Setting",
            Description: "Edit basic settings which some operations rely on."
        }
    }
    return (loading ? <Loader /> : <EditComponent {...xtics} />)
}
export default Edit;