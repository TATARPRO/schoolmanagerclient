import React, { useState, useEffect } from 'react';
import { Input, Col, FormGroup, Label, Row } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import NewComponent from '../../../masterComponents/New/NewComponents'

const New = (props) => {

    const initialState = {
        StudentId: "",
        SubjectId: 0,
        Test: "",
        Exam: "",
        ClassId: 0,
        TermId: 0,
        SessionId: 0
    }
    const [stdResp, setStd] = useState([])
    const [clsResp, setCls] = useState([])
    const [trmResp, setTrm] = useState([])
    const [sshResp, setSsh] = useState([])
    const [subResp, setSub] = useState([])
    const [errMsg, setError] = useState("");
    const [New, setNew] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const Content = () => {
        return (
            <>
                <p className="text-danger">{errMsg}</p>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Student Name</Label>
                        <Input type="select" name="StudentId" id="StudentId" value={New.StudentId} onChange={handleChange}>
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
                        <Input type="select" name="SubjectId" id="SubjectId" value={New.SubjectId} onChange={handleChange}>
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
                        <Input type="text" value={New.Test} name="Test" onChange={handleChange} />
                    </Col>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Exam</Label>
                        <Input type="text" value={New.Exam} name="Exam" onChange={handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Class</Label>
                        <Input type="select" name="ClassId" value={New.ClassId} onChange={handleChange}>
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
                        <Input type="select" name="TermId" value={New.TermId} onChange={handleChange}>
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
                        <Input type="select" name="SessionId" value={New.SessionId} onChange={handleChange}>
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
        setNew({ ...New, [name]: value })
    }
    const validateData =()=>{
        if (New.StudentId == 0 || New.StudentId == undefined) {
        setError("Please select a student")
        return false
    }
    if (New.SubjectId == 0 || New.SubjectId == undefined) {
        setError("Please select a subject")
        return false
    }
    if (New.ClassId == 0 || New.ClassId == undefined) {
        setError("Please select a class")
        return false
    }
    if (New.TermId == 0 || New.TermId == undefined) {
        setError("Please select a term")
        return false
    }
    if (New.SessionId == 0 || New.SessionId == undefined) {
        setError("Please select a session")
        return false
    }
    return true
    }
    const Add = async (event) => {
        event.preventDefault();
        if (!validateData()) return
        setLoading(true);
        let addUrl = "gazzettes/create/";
        let response = await API.post(addUrl, New)
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
        if (response && (response.status >= 200 || response.status <= 299)) {
        setLoading(false);
            props.history.push("/dashboard/gazzettes/index");
        }
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/gazzettes/index");
    }
    const xtics = {
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: Add,
        Title: {
            Name: "Gazzette",
            Description: "The common way of adding a gazzette entry is by uploading. By performing the operation this way means you are sure of what you are doing."
        }
    }
    useEffect(() => {
        const getStd =async()=>{
            let stdGetUrl = "students/getstudents"
            let response = await API.get(stdGetUrl)
            .catch(error=> {
                if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                    props.history.push(resolveCode(error.response.status));
                }
                if(error.response && (error.response.status >= 400 && error.response.status <= 499)){
                    props.history.push(resolveCode(error.response.status));
                }
            })
            if (response && (response.status >= 200 && response.status <= 299)) setStd(response.data)
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
        const getData =async()=>{
            setLoading(true)
            await getStd()
            await getSub()
            await getCls()
            await getTrm()
            await getSsh()
        setLoading(false)
        }
        getData()
    }, [])
    return (loading ? <Loader /> : <NewComponent {...xtics} />
    )
}
export default New;