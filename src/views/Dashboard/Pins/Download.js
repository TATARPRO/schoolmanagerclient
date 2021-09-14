import React, { useState } from 'react';
import { Input, Col, FormGroup, Label } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import DownloadComponent from '../../../masterComponents/Downloads/DownloadComponent';

const Download = (props) => {
    const [loading, setLoading] = useState(true)
    const initialState = {
        classId: 0,
        status: 0
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
                        <Input type="select" name="status" id="Status" value={data.status} onChange={handleChange}>
                            <option value="k">Please select...</option>
                            <option value="0">Active</option>
                            <option value="1">Expired</option>
                            <option value="2">Used</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="">Term</Label>
                        <Input type="text" id="" value={data.term} name="term" onChange={handleChange} />
                    </Col>
                    <Col xs="12" md="6">
                        <Label htmlFor="">Session</Label>
                        <Input type="text" id="" value={data.session} name="session" onChange={handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="">Date created</Label>
                        <Input type="date" id="" value={data.created} name="created" onChange={handleChange} />
                    </Col>
                </FormGroup>
            </>)
    }
    const sendData = async (event) => {
        event.preventDefault();
        let updUrl = "pins/download"

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
            var ffile = retrieveFile(response.data, "Pins" + new Date().toUTCString())
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
        props.history.push("/dashboard/pins/index");
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value })
    }
    const xtics = {
        Content: Body(),
        Cancel: cancel,
        HandleSubmit: sendData,
        Title: {
            Name: "Pins",
            Description: "Download a collection of students to complete their assessment data"
        }
    }

    return (loading ? <Loader /> : <DownloadComponent {...xtics} />)
}
export default Download