import React, { useState, useEffect } from 'react';
import { Input, Col, FormGroup, Label } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import EditComponent from '../../../masterComponents/Edits/EditComponents'

const Edit = (props) => {
    const initialState = {
        Id: 0,
        Name: "",
        ConcurrencyStamp: ""
    }
    const [errMsg, setError] = useState("");
    const [newTerm, setClass] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <FormGroup row>
                <Col xs="12" md="9">
                    <Label htmlFor="hf-ClassName">Term Name</Label>
                    <Input type="text" required id="hf-ClassName" value={newTerm.Name} name="Name" onChange={handleChange} />
                </Col>
            </FormGroup>
            </>
        )
    }
    const validateData =()=>{
        if (newTerm.Name == "" || newTerm.Name == undefined) {
        setError("Please enter a term name.")
        return false
    }
    return true
}
    const onSave = async (event) => {
        event.preventDefault();
        if(!validateData()) return
        setLoading(true);
        let editUrl = `terms/update/`;
        let response = await API.put(editUrl, newTerm)
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
            props.history.push("/dashboard/terms/index")
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setClass({...newTerm, [name]: value })
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/terms/index");
    }
    useEffect(() => {
        const Retrieve = async () => {
            let getUrl = `terms/getterm/${props.match.params.id}`;
            if (props.match.params.id === null || props.match.params.id === undefined) {
                props.history.push("/dashboard/terms/index");
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
            Name: "Term",
            Description: "Edit a term which is the basic distinctions between sections of teachings."
        }
    }
    return (loading ? <Loader /> : <EditComponent {...xtics} />)
}
export default Edit;