import React, { useState, useEffect } from 'react';
import { Input, Col, FormGroup, Label, Row } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import DownloadComponent from '../../../masterComponents/Downloads/DownloadComponent';

const Download = (props) => {
    const [loading, setLoading] = useState(true)
    const [classes, setClasses] = useState([])
    const [terms, setTerms] = useState([])
    const [sessions, setSessions] = useState([])
    const [subjects, setSubjects] = useState([])
    const [querySource, setSource] = useState([])
    const [queries ,setQuery] = useState("")
    const [type, setType] = useState("")
    const [value, setValue] = useState("")
    const [errMsg, setError] = useState("")

    const Body = () => {
        return (
            <>
                <p className="text-danger">{errMsg}</p>
{/*
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="ClassId">Query Option</Label>
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
                        <Label htmlFor="hf-ClassName">Test</Label>
                        <Input type="text" value={New.Test} name="Test" onChange={handleChange} />
                    </Col>
                </FormGroup>
                        */}
                <FormGroup>
                    <Col xs="12" md="6">
                        <Label htmlFor="Option">Query option</Label>
                        <Input type="select" name="Type" id="Option" value={type} onChange={handleChange}>
                            <option key="0" value="0">Class</option>
                            <option key="1" value="1">Session</option>
                            <option key="2" value="2">Subject</option>
                            <option key="3" value="3">Term</option>
                        </Input>
                    </Col>
                    <Col xs="12" md="6">
                        <Label htmlFor="Category">Query value</Label>
                        <Input type="select" name="value"  value={value} onChange={handleChange}>
                            {querySource.map((value, index)=>{
                                return (<option key={index} value={value.Id}>{value.Name}</option>)
                            })}
                        </Input>
                    </Col>

                </FormGroup>
            </>)
    }
    const validateData = () => {
        // if (data.ClassId == 0 || data.ClassId == undefined) {
        //     setErrMsg("Please select a class for the students to download.")
        //     return false
        // }
        return true
    }
    const sendData = async (event) => {
        event.preventDefault();
        let updUrl = `gazzettes/download/?${queries}`

        setLoading(true);
        let response = await API.get(updUrl)
            .catch(error => {
                if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                    props.history.push("/500");
                }
                if (error.response && (error.response.status >= 400 && error.response.status <= 499) && error.response.data) {
                    if (resolveCode(error.response.status)) props.history.push(resolveCode(error.response.status))
                    setLoading(false);
                    setError(error.response.data)
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
        props.history.push("/dashboard/gazzettes/index");
    }
    const addQuery=()=>{
        
        let previous = queries.split("&").filter((val, index, array)=>{
            return (!(val.includes(`${type}=${value}`)))
        })
        previous.push(`${type}=${value}`)
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        if(name == "Type"){
            switch (value) {
                case "0":
                    setSource(classes)
                    setType("class")
                    break;
                case "1":
                    setSource(sessions)
                    setType("session")
                    break;
                case "2":
                    setSource(subjects)
                    setType("subject")
                    break;
                case "3":
                    setSource(terms)
                    setType("term")
                    break;
                default:
                    break;
            }
        }else{
            setValue(value)
        }
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
            Name: "Scoresheet",
            Description: "Download a collection of students to complete their assessment data. Queries use 'AND' logic"
        }
    }

    return (loading ? <Loader /> : <DownloadComponent {...xtics} />)
}
export default Download