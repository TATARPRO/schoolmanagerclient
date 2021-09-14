import React, { useState, useEffect } from 'react';
import { Input, Col, FormGroup, Label, Row, Button, ButtonGroup } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import DownloadComponent from '../../../masterComponents/Downloads/DownloadComponent';

const Download = (props) => {
    const [loading, setLoading] = useState(false)
    const initialState = {
        Status: 0
    }
    const [data, setData] = useState(initialState)
    const [errMsg, setErrMsg] = useState("")

    const Body = () => {
        return (
            <>
                <p className="text-danger">{errMsg}</p>
                <Row>
                <ButtonGroup>
                <Button type="button" onClick={DownloadFormat} size="sm" color="primary">
                <i className="fa fa-dot-circle-o"></i>Download speadsheet DownloadFormat for teachers
                </Button>                
            </ButtonGroup>
                </Row>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="Category">Select query Status</Label>
                        <Input type="select" name="Status" id="Status" value={data.Status} onChange={handleChange}>
                            <option value="0">Active</option>
                            <option value="1">Dismissed</option>
                            <option value="2">No query</option>
                        </Input>
                    </Col>
                </FormGroup>

            </>)
    }
    const DownloadFormat=async(event)=>{
        event.preventDefault()
        let downUrl = "teachers/dowloadformat"

        setLoading(true);
        let response = await API.get(downUrl)
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
            var ffile = retrieveFile(response.data, "teacherList" + new Date().toUTCString())
            setLoading(false);
            window.location = URL.createObjectURL(ffile)
        }
    }
    const validateData = () => {
        if (data.Status == 0 || data.Status == undefined) {
            setErrMsg("Please select a status for the teachers to download.")
            return false
        }
        return true
    }
    const sendData = async (event) => {
        event.preventDefault();
        if (!validateData()) return
        let updUrl = "teachers/download"

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
            var ffile = retrieveFile(response.data, "teacherList" + new Date().toUTCString())
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
        props.history.push("/dashboard/teachers/index");
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
            Name: "Teachers",
            Description: "Download a collection of teacher's data"
        }
    }

    return (loading ? <Loader /> : <DownloadComponent {...xtics} />)
}
export default Download