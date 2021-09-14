import React, { useState, useEffect } from 'react';
import { Input, Col, FormGroup, Label, Row } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import DownloadComponent from '../../../masterComponents/Downloads/DownloadComponent';

const Download = (props) => {
    const [loading, setLoading] = useState(true)
    const initialState = {
        classId: 0,
        status: 0
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
                        <Input type="select" name="classId" id="classId" value={data.classId} onChange={handleChange}>
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
                        <Input type="select" name="status" id="Status" value={data.status} onChange={handleChange}>
                            <option value="k">Please select...</option>
                            <option value="0">Active</option>
                            <option value="1">Dismissed</option>
                            <option value="2">Expelled</option>
                            <option value="3">Graduated</option>
                            <option value="4">Suspended</option>
                            <option value="5">Withdrawn</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">State</Label>
                        <Input type="text" id="" value={data.state} name="state" onChange={handleChange} />
                    </Col>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Admission Year</Label>
                        <Input type="date" id="" value={data.adminYear} name="adminYear" onChange={handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="Category">Additional Query</Label>
                        <Input type="select" name="ad" id="Status" value={data.ad} onChange={handleChange}>
                            <option value="k">Please select...</option>
                            <option value="cat">Category</option>
                            <option value="grad">Graduated</option>
                        </Input>
                    </Col>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Value</Label>
                        <Input type="text" id="" value={data.adValue} name="adValue" onChange={handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Date of Birth</Label>
                        <Input type="date" id="" value={data.DOB} name="DOB" onChange={handleChange} />

                    </Col>
                </FormGroup>
            </>)
    }
    const sendData = async (event) => {
        event.preventDefault();
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
            var ffile = retrieveFile(response.data, "studentList" + new Date().toUTCString())
            setLoading(false);
            window.location = URL.createObjectURL(ffile)
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
        return new File([u8Arr], fileName, { type: mime })
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

    return (loading ? <Loader /> : <DownloadComponent {...xtics} />)
}
export default Download