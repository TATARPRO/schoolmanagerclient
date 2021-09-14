import React, { useState, useEffect } from 'react';
import { Input, Col, FormGroup, Label } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import EditComponent from '../../../masterComponents/Edits/EditComponents'

const Edit = (props) => {
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
    const onSave = async (event) => {
        event.preventDefault();
        if(!validateData()) return
        setLoading(true);
        let editUrl = `teachersubjects/update/`;
        let response = await API.put(editUrl, data)
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
        if (response.status >= 200 && response.status <= 299) {
        setLoading(false);
            props.history.push("/dashboard/teachersubject/index")
        }
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/teachersubject/index");
    }
    useEffect(() => {
        setLoading(true)
        const getStff =async()=>{
            let tchGetUrl = "teachers/getteachers"
            let tchResponse = await API.get(tchGetUrl)
            .catch(error=> {
                if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                    props.history.push(resolveCode(error.response.status));
                }
                if(error.response && (error.response.status >= 400 && error.response.status <= 499)){
                    props.history.push(resolveCode(error.response.status));
                }
            })
            if(tchResponse && (tchResponse.response >= 200 && tchResponse.response <= 299)){
                setStff(tchResponse.data)
            }
            
        }
        const getSub =async()=>{
            let subGetUrl = "subjects/getsubjects"
            let subs = await API.get(subGetUrl)
            .catch(error=> {
                if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                    props.history.push(resolveCode(error.response.status));
                }
                if(error.response && (error.response.status >= 400 && error.response.status <= 499)){
                    props.history.push(resolveCode(error.response.status));
                }
            })
            if(subs && (subs.response >= 200 && subs.response <= 299)){
                setSub(subs.data)
            }
        }
        const getCls =async()=>{
            let clsGetUrl = "classes/getclasses"
            let clss = await API.get(clsGetUrl)
            .catch(error=> {
                if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                    props.history.push(resolveCode(error.response.status));
                }
                if(error.response && (error.response.status >= 400 && error.response.status <= 499)){
                    props.history.push(resolveCode(error.response.status));
                }
            })
            if(clss && (clss.response >= 200 && clss.response <= 299)){
                setCls(clss.data)
            }
        }
            getStff()
             getSub()
            getCls()
        
        const Retrieve = async () => {
            if (props.match.params.id === null || props.match.params.id === undefined) {
                props.history.push("/dashboard/teachersubject/index");
            }
            let params = props.match.params.id
            let vars = params.split(";")
            let getUrl = `teachersubjects/getteachersubject/?teacherId=${vars[0]}&subjectId=${vars[1]}&classId=${vars[2]}`;
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
            Name: "Subject Allocation",
            Description: "Changing this data implies that the respective personnel has been given a new appointment."
        }
    }
    return (loading ? <Loader /> : <EditComponent {...xtics} />)
}
export default Edit;