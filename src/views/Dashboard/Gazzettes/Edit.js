import React, { useState, useEffect } from 'react';
import { Input, Col, FormGroup, Label } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import EditComponent from '../../../masterComponents/Edits/EditComponents'

const Edit = (props) => {
    const initialState = {
        StudentId: "",
        SubjectId: 0,
        Test: "",
        Exam: "",
        ClassId: 0,
        TermId: 0,
        SessionId: 0,
        ConcurrencyStamp: ""
    }
    const [stdResp, setStd] = useState([])
    const [clsResp, setCls] = useState([])
    const [trmResp, setTrm] = useState([])
    const [sshResp, setSsh] = useState([])
    const [subResp, setSub] = useState([])
    const [errMsg, setError] = useState("");
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const Content = () => {
        return (
            <>
                <p className="text-danger">{errMsg}</p>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Student Name</Label>
                        <Input type="select" name="StudentId" id="StudentId" value={data.StudentId} onChange={handleChange}>
                            <option value="">Please select...</option>
                            {stdResp.map((value) => {
                                return (
                                    <option value={value.Id}>{value.StudentName}</option>
                                )
                            })}
                        </Input>
                    </Col>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Subject</Label>
                        <Input type="select" name="SubjectId" id="SubjectId" value={data.SubjectId} onChange={handleChange}>
                            <option value="">Please select...</option>
                            {subResp.map((value) => {
                                return (
                                    <option value={value.Id}>{value.Name}</option>
                                )
                            })}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Test</Label>
                        <Input type="text" value={data.Test} name="Test" onChange={handleChange} />
                    </Col>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Exam</Label>
                        <Input type="text" value={data.Exam} name="Exam" onChange={handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Class</Label>
                        <Input type="select" name="ClassId" value={data.ClassId} onChange={handleChange}>
                            <option value="">Please select...</option>
                            {clsResp.map((value) => {
                                return (
                                    <option value={value.Id}>{value.Name}</option>
                                )
                            })}
                        </Input>
                    </Col>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Term</Label>
                        <Input type="select" name="TermId" value={data.TermId} onChange={handleChange}>
                            <option value="">Please select...</option>
                            {trmResp.map((value) => {
                                return (
                                    <option value={value.Id}>{value.Name}</option>
                                )
                            })}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Session</Label>
                        <Input type="select" name="SessionId" value={data.SessionId} onChange={handleChange}>
                            <option value="">Please select...</option>
                            {sshResp.map((value) => {
                                return (
                                    <option value={value.Id}>{value.Name}</option>
                                )
                            })}
                        </Input>
                    </Col>
                </FormGroup>
            </>
        )
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value })
    }
    const validateData =()=>{
        if (data.StudentId === 0 || data.StudentId === undefined) {
        setError("Please select a student")
        return false
    }
    if (data.SubjectId === 0 || data.SubjectId === undefined) {
        setError("Please select a subject")
        return false
    }
    if (data.ClassId === 0 || data.ClassId === undefined) {
        setError("Please select a class")
        return false
    }
    if (data.TermId === 0 || data.TermId === undefined) {
        setError("Please select a term")
        return false
    }
    if (data.SessionId === 0 || data.SessionId === undefined) {
        setError("Please select a session")
        return false
    }
    return true
    }
    const onSave = async (event) => {
        event.preventDefault();
        if (!validateData()) return
        setLoading(true);
        let editUrl = `gazzettes/update/`;
        let response = await API.put(editUrl, data)
        .catch(error=> {
            if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                props.history.push(resolveCode(error.response.status));
            }
            if(error.response && (error.response.status >= 400 && error.response.status <= 499)){
                if(resolveCode(error.response.status) !== "") props.history.push(resolveCode(error.response.status))
              setLoading(false);
              setError(error.response.data);
            }
        })
        setLoading(false);
        if (response.status >= 200 && response.status <= 299) {
            props.history.push("/dashboard/gazzettes/index")
        }else if (response.status >= 500 && response.status <= 599) {
            resolveCode(response.status);
        }
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/gazzettes/index");
    }
    useEffect(() => {
        const Retrieve = async () => {
            setLoading(true)
        const getStd =async()=>{
            let stdGetUrl = "students/getstudents"
            let stds = await API.get(stdGetUrl)
            setStd(stds.data)
        }
        const getSub =async()=>{
            let subGetUrl = "subjects/getsubjects"
            let subs = await API.get(subGetUrl)
            setSub(subs.data)
        }
        const getCls =async()=>{
            let clsGetUrl = "classes/getclasses"
            let clss = await API.get(clsGetUrl)
            setCls(clss.data)
        }
        const getTrm =async()=>{
            let trmGetUrl = "terms/getterms"
            let trms = await API.get(trmGetUrl)
            setTrm(trms.data)
        }
        const getSsh =async()=>{
            let sshGetUrl = "sessions/getsessions"
            let sshs = await API.get(sshGetUrl)
            setSsh(sshs.data)
        }
        await getStd()
        await getSub()
        await getCls()
        await getTrm()
        await getSsh()
            let getUrl = `gazzettes/getgazzettes/${props.match.params.id}`;
            if (props.match.params.id === null || props.match.params.id === undefined) {
                props.history.push("/dashboard/gazzettes/index");
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
                setData(response.data);
            }
        }
        Retrieve();
    }, [])
    const xtics = {
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: onSave,
        Title: {
            Name: "Gazzettes",
            Description: "Edit a class which primary distinguishes student's designations."
        }
    }
    return (loading ? <Loader /> : <EditComponent {...xtics} />)
}
export default Edit;