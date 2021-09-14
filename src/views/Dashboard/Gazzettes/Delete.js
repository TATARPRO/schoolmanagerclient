import React, { useState, useEffect } from 'react';
import { Input,Col,FormGroup,Label } from 'reactstrap';
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import DeleteComponent from '../../../masterComponents/Deletes/DeleteComponents'

const Delete=(props)=>{
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
                        <Input type="select" disabled name="StudentId" id="StudentId" value={data.StudentId}>
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
                        <Input type="select" disabled name="SubjectId" id="SubjectId" value={data.SubjectId}>
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
                        <Input type="text" disabled value={data.Test} name="Test" />
                    </Col>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Exam</Label>
                        <Input type="text" disabled value={data.Exam} name="Exam" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Class</Label>
                        <Input type="select" disabled name="ClassId" value={data.ClassId}>
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
                        <Input type="select" disabled name="TermId" value={data.TermId}>
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
                        <Input type="select" disabled name="SessionId" value={data.SessionId}>
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
    const onDelete = async (event) => {
        event.preventDefault();
        setLoading(true);
        let editUrl = `gazzettes/delete/${data.Id}`;
        let response = await API.delete(editUrl)
        .catch(error=> {
            let rdr = resolveCode(error.response.status);
            if(rdr) props.history.push(rdr);
            if(error.response.status >= 400 && error.response.status <= 499){
              setLoading(false);
              setError(error.response.data);
            }else{
              props.history.push(resolveCode(error.response.status));
            }
        })
        setLoading(false);
        if (response && (response.status >= 200 && response.status <= 299)) {
            props.history.push("/dashboard/gazzettes/index")
        }
    }
    const cancel =(event) => {
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
                let rdr = resolveCode(error.response.status);
                if(rdr) props.history.push(rdr);
                if(error.response.status >= 400 && error.response.status <= 499){
                  setLoading(false);
                  setError(error.response.data);
                }else{
                  props.history.push(resolveCode(error.response.status));
                }
            })
            setLoading(false);
            if (response && (response.status >= 200 && response.status <= 299)) {
                setData(response.data);
            }
        }
        Retrieve();
    }, [])
    const xtics={
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: onDelete,
        Title: {
            Name: "Gazzettes",
            Description: "Are you sure you want to delete this class which distinguishes student's designations?"
        }
    }
    return (loading ? <Loader />: <DeleteComponent {...xtics}/> )
}
export default Delete;