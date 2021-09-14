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
    const [newClass, setClass] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <FormGroup row>
                <Col xs="12" md="9">
                    <Label htmlFor="hf-ClassName">Class Name</Label>
                    <Input type="text" required id="hf-ClassName" value={newClass.Name} name="Name" onChange={handleChange} />
                </Col>
            </FormGroup>
            </>
        )
    }
    const onSave = async (event) => {
        setLoading(true);
        event.preventDefault();
        let editUrl = `studentpositions/update/`;
        let response = await API.put(editUrl, newClass)
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
        setLoading(false);
        if (response.status >= 200 && response.status <= 299) {
            props.history.push("/dashboard/studentpositions/index")
        }else if (response.status >= 500 && response.status <= 599) {
            resolveCode(response.status);
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setClass({...newClass, [name]: value })
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/studentpositions/index");
    }
    useEffect(() => {
        const Retrieve = async () => {
            let getUrl = `studentpositions/getstudentpositions/${props.match.params.id}`;
            if (props.match.params.id === null || props.match.params.id === undefined) {
                props.history.push("/dashboard/studentpositions/index");
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
            Name: "Student Positions",
            Description: "Editing students' position or average may result to the admin recalculating the results for the edited term."
        }
    }
    return (loading ? <Loader /> : <EditComponent {...xtics} />)
}
export default Edit;