import React, { useState, useEffect} from 'react';
import { Input,Col,FormGroup,Label } from 'reactstrap';
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import NewComponent from '../../../masterComponents/New/NewComponents'

const New=(props)=>{
    const initialState ={
        Id: "",
        Value: "",
        UsageCount: 0,
        StudentId: "",
        TermId: 0,
        SessionId: 0,
        Expired: true,
        Validity: new Date().toUTCString()
    }
    const [stdResp, setStd] = useState([])
    const [trmResp, setTrm] = useState([])
    const [sshResp, setSsh] = useState([])
    const [errMsg, setError] = useState("");
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <FormGroup row>
                <Col xs="12" md="12">
                    <Label htmlFor="Pin">Pin</Label>
                    <Input type="text" required value={data.Value} name="Value" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
            <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Student Name</Label>
                        <Input type="select" name="StudentId" value={data.StudentId} onChange={handleChange}>
                            <option value="">Please select...</option>
                            {stdResp.map((value) => {
                                return (
                                    <option value={value.Id}>{value.StudentName}</option>
                                )
                            })}
                        </Input>
                    </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="UsageCount">Number of Times Used</Label>
                    <Input type="text" required value={data.UsageCount} name="UsageCount" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
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
            <FormGroup>
            <Col xs="12" md="6">
            <Input type="checkbox" required value={data.Expired} name="Expired" onChange={handleChange} />
            <Label htmlFor="Expired">Expired?</Label>
            </Col>
            <Col xs="12" md="6">
                    <Label htmlFor="UsageCount">Validity</Label>
                    <Input type="date" required value={data.Validity} name="Validity" onChange={handleChange} />
                </Col>
            </FormGroup>
            </>
        )
    }
    const validateData =()=>{
        if (data.Value === "" || data.Value === undefined) {
        setError("Please enter a pin value!")
        return false
    }
    if (data.Validity === "" || data.Validity === undefined) {
        setError("An expiry date must be specified!")
        return false
    }
    return true
}
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({...data, [name]: value })
    }
    const Add = async (event) => {
        event.preventDefault();
        if (!validateData()) return 
        setLoading(true);
        let addUrl = "pins/create/";
        let response = await API.post(addUrl, data)
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
        if (response && (response.status >= 200 || response.status <= 299)) {
            props.history.push("/dashboard/pins/index");
        }
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/pins/index");
    }
    useEffect(()=>{
        setLoading(true)
        const getData =async()=>{
            const getTrm =async()=>{
                let trmGetUrl = "terms/getterms"
                let response = await API.get(trmGetUrl)
                .catch(error=> {
                if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                    props.history.push(resolveCode(error.response.status));
                }
                if(error.response && (error.response.status >= 400 && error.response.status <= 499)){
                    props.history.push(resolveCode(error.response.status));
                }
            })
            if(response && (response.status >= 200 && response.status <= 299)) setTrm(response.data)
            }
            const getSsh =async()=>{
                let sshGetUrl = "sessions/getsessions"
                let sshs = await API.get(sshGetUrl)
                setSsh(sshs.data)
            }
            const getStd =async()=>{
                let stdGetUrl = "students/getstudents"
                let stds = await API.get(stdGetUrl)
                setStd(stds.data)
            }
            await getTrm()
            await getSsh()
            await getStd()
            setLoading(false)
        }
        getData()
    },[])
    const xtics={
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: Add,
        Title: {
            Name: "Pin",
            Description: "Add a class to enroll new students into."
        }
    }
    return (loading ? <Loader />:<NewComponent {...xtics}/>
    )
}
export default New;