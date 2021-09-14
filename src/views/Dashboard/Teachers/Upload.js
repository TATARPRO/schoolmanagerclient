import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Input, InputGroup, InputGroupAddon, InputGroupText, Col, FormGroup, Label, Row } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import UploadComponent from '../../../masterComponents/Uploads/UploadComponents';

const Upload = (props) => {
    const [loading, setLoading] = useState(false)
    const initialState = {
        Status: "",
        File: ""
    }
    const [data, setData] = useState(initialState)
    const [errMsg, setErrMsg] = useState("")

    const Body = () => {
        return (
            <>
                <p className="text-danger">{errMsg}</p>

                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="Category">Status</Label>
                        <Input type="select" name="Status" id="Status" value={data.Status} onChange={handleChange}>
                            <option value="">Please select...</option>
                            <option value="0">Active</option>
                            <option value="1">Dismissed</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col xs="12" md="6">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend"><InputGroupText><i className="fa fa-upload"></i></InputGroupText></InputGroupAddon>
                            <Input type="file" id="ExcelFile" name="File" onChange={handleFileChange} />
                        </InputGroup>
                    </Col>
                </FormGroup>
            </>)
    }
    const validateData = () => {

        if (data.Status === "" || data.Status == undefined) {
            setErrMsg("Please select a status for the teachers.")
            return false
        }
        if (data.File == "") {
            setErrMsg("Please select a file")
            return false
        }
        return true
    }
    const ReadBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve((reader.result))
        reader.onerror = error => reject(error)
    })
    const sendData = async (event) => {
        event.preventDefault();
        if (!validateData()) return
        let updUrl = "teachers/upload"

        setLoading(true);
        let response = await API.post(updUrl, data)
            .catch(error => {
                if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                    props.history.push(resolveCode(error.response.status));
                }
                if ((error.response.status >= 400 && error.response.status <= 499) && error.response.data) {
                    if(resolveCode(error.response.status)) props.history.push(resolveCode(error.response.status))
                    setLoading(false);
                    setErrMsg(error.response.data)
                }
            })
        if (response && (response.status >= 200 && response.status <= 299)) {
        setLoading(false);
            props.history.push("/dashboard/teachers/index");
        }
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/teachers/index");
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value })
    }
    const handleFileChange = async (e) => {
        const { name } = e.target;

        let ff = await ReadBase64(e.target.files[0]);
        setData({ ...data, [name]: ff })
    }
   
    const xtics = {
        Content: Body(),
        Cancel: cancel,
        HandleSubmit: sendData,
        Title: {
            Name: "Teachers",
            Description: "The easiest way to add teachers into the collection is by upload."
        }
    }
    return (loading ? <Loader /> : <UploadComponent {...xtics} />)
}
export default Upload