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
    const [New, setClass] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <FormGroup row>
                <Col xs="12" md="9">
                    <Label htmlFor="hf-ClassName">Subject Name</Label>
                    <Input type="text" required id="hf-ClassName" value={New.Name} name="Name" onChange={handleChange} />
                </Col>
            </FormGroup>
            </>
        )
    }
    const validateData =()=>{
        if (New.Name == "" || New.Name == undefined) {
        setError("Please enter a subject name.")
        return false
    }
    return true
}
    const onSave = async (event) => {
        event.preventDefault();
        if(!validateData()) return
        setLoading(true);
        let editUrl = `subjects/update/`;
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
        if (response && (response.status >= 200 && response.status <= 299)) {
        setLoading(false);
            props.history.push("/dashboard/Subjects/index")
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setClass({...New, [name]: value })
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/Subjects/index");
    }
    useEffect(() => {
        const Retrieve = async () => {
            let getUrl = `subjects/getsubject/${props.match.params.id}`;
            if (props.match.params.id === null || props.match.params.id === undefined) {
                props.history.push("/dashboard/Subject/index");
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
            Name: "Subject",
            Description: "Subjects are the distictions in teaching which are possessed by teachers."
        }
    }
    return (loading ? <Loader /> : <EditComponent {...xtics} />)
}
export default Edit;