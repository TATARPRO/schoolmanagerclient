import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Input, InputGroup, InputGroupAddon, InputGroupText, Col, FormGroup, Label, Row } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import UploadComponent from '../../../masterComponents/Uploads/UploadComponents';
import ListGroupItemHeading from 'reactstrap/lib/ListGroupItemHeading';

const Download = (props) => {
    const [loading, setLoading] = useState(true)
    const initialState = {
        ClassId: 0,
        Status: 0,
        Option: 0
    }
    const [classes, setClasses] = useState([])
    const [data, setData] = useState(initialState)
    const [errMsg, setErrMsg] = useState("")

    const Body = () => {
        return (
            <>
                <p className="text-danger">{errMsg}</p>

                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="ClassId">Class</Label>
                        <Input type="select" name="ClassId" id="ClassId" value={data.ClassId} onChange={handleChange}>
                            <option value="">Please select...</option>
                            {classes.map((value) => {
                                return (
                                    <option value={value.Id}>{value.Name}</option>
                                )
                            })}
                        </Input>
                    </Col>
                    <Col xs="12" md="6">
                        <Label htmlFor="Category">Status</Label>
                        <Input type="select" name="Status" id="Status" value={data.Status} onChange={handleChange}>
                            <option value="k">Please select...</option>
                            <option value="0">Active</option>
                            <option value="1">Dismissed</option>
                            <option value="2">Expelled</option>
                            <option value="3">Graduated</option>
                            <option value="4">Suspended</option>
                            <option value="5">Withdrawn</option>
                            <option value="6">No query</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup>
                <Col xs="12" md="6">
                        <Label htmlFor="Option">Download Option</Label>
                        <Input type="select" name="Option" id="Option" value={data.Status} onChange={handleChange}>
                            <option value="k">Please select...</option>
                            <option value="0">Download list only</option>
                            <option value="1">Download as scoresheet</option>
                        </Input>
                    </Col>
                </FormGroup>
            </>)
    }
    const validateData = () => {
        if (data.ClassId == 0 || data.ClassId == undefined) {
            setErrMsg("Please select a class for the students to download.")
            return false
        }
        return true
    }
    const sendData = async (event) => {
        event.preventDefault();
        if (!validateData()) return
        let updUrl = "students/download"

        setLoading(true);
        let response = await API.post(updUrl, data)
            .catch(error => {
                if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                    props.history.push("/500");
                }
                if (error.response && (error.response.status >= 400 && error.response.status <= 499) && error.response.data) {
                    if (resolveCode(error.response.status)) props.history.push(resolveCode(error.response.status))
                    setLoading(false);
                    setErrMsg(error.response.data)
                }
            })
        if (response && (response.status >= 200 && response.status <= 299)) {
            var ffile = retrieveFile(response.data.File, "studentList" + new Date().toUTCString())
            setLoading(false);
            return ffile
        }
    }
    const retrieveFile = (dataUrl, fileName) => {
        var arr = dataUrl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bStr = atob(arr[1]),
            n = bStr.length,
            u8Arr = new Uint8Array(n);
        while (n--) {
            u8Arr[n] = bStr.charCodeAt(n);
        }
        return new Blob([u8Arr], fileName, { type: mime })
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/students/index");
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value })
    }
    useEffect(() => {
        const getClasses = async () => {
            let getUrl = "classes/getclasses/"
            let response = await API.get(getUrl)
                .catch(error => {
                    if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                        props.history.push(resolveCode(error.response.status));
                    }
                    if (error.response && (error.response.status >= 400 && error.response.status <= 499)) {
                        props.history.push(resolveCode(error.response.status));
                    }
                })
            if (response && (response.status >= 200 && response.status <= 299)) {
                setLoading(false)
                setClasses(response.data);
            }
        }
        getClasses()
    }, [])
    const xtics = {
        Content: Body(),
        Cancel: cancel,
        HandleSubmit: sendData,
        Title: {
            Name: "Students",
            Description: "Download a collection of students to complete their assessment data"
        }
    }

    return (loading ? <Loader /> : <UploadComponent {...xtics} />)
}
export default Download