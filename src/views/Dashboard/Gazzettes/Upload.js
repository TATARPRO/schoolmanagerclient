import React, { useState, useEffect } from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText, Col, FormGroup, Label, Row } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import UploadComponent from '../../../masterComponents/Uploads/UploadComponents';

const Upload = (props) => {
    const [loading, setLoading] = useState(true)
    const initialState = {
        ClassId: 0,
        SubjectId: 0,
        File: ""
    }
    const [classes, setClasses] = useState([])
    const [subjects, setSubjects] = useState([])
    const [data, setData] = useState(initialState)
    const [errMsg, setErrMsg] = useState("")

    const Body = () => {
        return (
            <>
                <p className="text-danger">{errMsg}</p>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="ClassId">Students' class</Label>
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
                        <Label htmlFor="Category">Subject</Label>
                        <Input type="select" name="SubjectId" id="SubjectId" value={data.SubjectId} onChange={handleChange}>
                            <option value="">Please select...</option>
                            {subjects.map((value) => {
                                return (
                                    <option value={value.Id}>{value.Name}</option>
                                )
                            })}
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
        if (data.ClassId == 0 || data.ClassId == undefined) {
            setErrMsg("Please select a class for the students to upload.")
            return false
        }
        if (data.SubjectId === "" || data.SubjectId == undefined) {
            setErrMsg("Please select subject")
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
        let updUrl = "gazzettes/upload"

        setLoading(true);
        let response = await API.post(updUrl, data)
            .catch(error => {
                if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                    props.history.push("/500");
                }
                if ((error.response.status >= 400 && error.response.status <= 499) && error.response) {
                    if(resolveCode(error.response.status) != "") props.history.push(resolveCode(error.response.status))
              
                    setErrMsg(error.response.data)
                }
            })
        setLoading(false);
        if (response && (response.status >= 200 && response.status <= 299)) {
            props.history.push("/dashboard/gazzettes/index");
        }
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/gazzettes/index");
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
            Name: "Scoresheet",
            Description: "Scoresheets are records of assessment(s) taken by respective teachers."
        }
    }
    useEffect(() => {
        const getClasses = async () => {
            let getUrl = "classes/getclasses/"
            let subUrl ="subjects/getsubjects/"
            let claResponse = await API.get(getUrl)
                .catch(error => {
                    if (error && error.response) {
                        props.history.push(resolveCode(error.response.status))
                    } else {
                        props.history.push("/500")
                    }
                })
                let subResponse = await API.get(subUrl)

            if (claResponse && (claResponse.status >= 200 && claResponse.status <= 299)) {
                setClasses(claResponse.data);
            }
            if (subResponse && (subResponse.status >= 200 && subResponse.status <= 299)) {
            setLoading(false)
                setSubjects(subResponse.data);
            }
        }

        getClasses()
    }, [])

    return (loading ? <Loader /> : <UploadComponent {...xtics} />)
}
export default Upload