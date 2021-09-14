import React, { useState, useEffect} from 'react';
import { Input,Col,FormGroup,Label } from 'reactstrap';
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import NewComponent from '../../../masterComponents/New/NewComponents'

const New=(props)=>{
    
    const [stffResp, setStff] = useState([])
    const [clsResp, setCls] = useState([])
    const [subResp, setSub] = useState([])
    const [errMsg, setError] = useState("");
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Teacher</Label>
                    <Input type="select" name="TeacherId" value={data.TeacherId} onChange={handleChange}>
                            <option value="">Please select...</option>
                            {stffResp.map((value) => {
                                return (
                                    <option value={value.Id}>{value.TeacherName}</option>
                                )
                            })}
                        </Input>
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Subject</Label>
                    <Input type="select" name="SubjectId" value={data.SubjectId} onChange={handleChange}>
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
                    <Label htmlFor="hf-ClassName">Class</Label>
                    <Input type="select" name="ClassId" id="ClassId" value={data.ClassId} onChange={handleChange}>
                            <option value="">Please select...</option>
                            {clsResp.map((value) => {
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
        setData({...data, [name]: value })
    }
    const validateData =()=>{
       
        if(data.TeacherId == 0 || data.TeacherId === undefined){
            setError("Please select a teacher.")
            return false
        }
        if(data.SubjectId == 0 || data.SubjectId === undefined){
            setError("Please select a subject.")
            return false
        }
        if(data.ClassId == 0 || data.ClassId === undefined){
            setError("Please select a class.")
            return false
        }
        return true
    }
    const Add = async (event) => {
        event.preventDefault();
        if(!validateData()) return
        setLoading(true);
        let addUrl = "teachersubjects/create/";
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
        if (response && (response.status >= 200 || response.status <= 299)) {
        setLoading(false);
            props.history.push("/dashboard/teachersubject/index");
        }
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/teachersubject/index");
    }
    useEffect(() => {
        const getStff =async()=>{
            let stdGetUrl = "teachers/getteachers"
            let response = await API.get(stdGetUrl)
            .catch(error=> {
                if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                    props.history.push(resolveCode(error.response.status));
                }
                if(error.response && (error.response.status >= 400 && error.response.status <= 499)){
                    props.history.push(resolveCode(error.response.status));
                }
            })
            setStff(response.data)
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
        const getData =async()=>{
            setLoading(true)
            await getStff()
            await getSub()
            await getCls()
        setLoading(false)
        }
        getData()
    }, [])
    const xtics={
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: Add,
        Title: {
            Name: "Subject Allocation",
            Description: "By saving the implied data, the teacher concerned has been given a new subject appointment."
        }
    }
    return (loading ? <Loader />:<NewComponent {...xtics}/>
    )
}
export default New;