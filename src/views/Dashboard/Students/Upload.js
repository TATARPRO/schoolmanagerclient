import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Input, InputGroup, InputGroupAddon, InputGroupText, Col, FormGroup, Label, Row } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import UploadComponent from '../../../masterComponents/Uploads/UploadComponents';

const Upload = (props) => {
    const [loading, setLoading] = useState(true)
    const initialState = {
        ClassId: 0,
        Category: 0,
        AdminYear: "",
        ExpectedGradYear: "",
        Graduated: false,
        GradYear: "",
        File: ""
    }
    const [classes, setClasses] = useState([])
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
                        <Label htmlFor="Category">Students' category</Label>
                        <Input type="select" name="Category" id="Category" value={data.Category} onChange={handleChange}>
                            <option value="">Please select...</option>
                            <option value="0">Junior Category</option>
                            <option value="1">Senior Category</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="AdminYear">Admission Year</Label>
                        <Input type="date" required id="AdminYear" value={data.AdminYear} name="AdminYear" onChange={handleChange} />

                    </Col>
                    <Col xs="12" md="6">
                        <Label htmlFor="ExpectedGradYear">Expected Graduation Year</Label>
                        <Input type="date" required id="ExpectedGradYear" value={data.ExpectedGradYear} name="ExpectedGradYear" onChange={handleChange} />

                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="6" check inline>
                        <Input className="form-check-input" type="checkbox" id="Graduated" name="Graduated" value={data.Graduated} onChange={handleChecked} />
                        <Label check className="form-check-label" htmlFor="Graduated">Graduated?</Label>

                    </Col>
                    <Col xs="12" md="6">

                        <Label htmlFor="GradYear">Graduation Year</Label>
                        <Input type="date" required id="GradYear" value={data.GradYear} name="GradYear" onChange={handleChange} />

                    </Col>
                </FormGroup>
                <FormGroup row>
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
        if (data.Category === "" || data.Category == undefined) {
            setErrMsg("Please select the students' category.")
            return false
        }
        if (data.AdminYear == "" || data.AdminYear == undefined) {
            setErrMsg("Please choose a date to which the students were admitted.")
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
        let updUrl = "students/upload"

        setLoading(true);
        let response = await API.post(updUrl, data)
            .catch(error => {
                if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                    props.history.push("/500");
                }
                else if ((error.response.status >= 400 && error.response.status <= 499) && error.response.data) {
                    setErrMsg(error.response.data)
                    //props.history.push(resolveCode(error.response.status))
                }
            })
        setLoading(false);
        if (response && (response.status >= 200 && response.status <= 299)) {
            props.history.push("/dashboard/students/index");
        }
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/students/index");
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
    const handleChecked = (event) => {
        const { name, checked } = event.target;
        setData({ ...data, [name]: checked })
    }
    const xtics = {
        Content: Body(),
        Cancel: cancel,
        HandleSubmit: sendData,
        Title: {
            Name: "Students",
            Description: "The easiest way to add students into the collection is by upload."
        }
    }
    useEffect(() => {
        const getClasses = async () => {
            let getUrl = "classes/getclasses/"
            let response = await API.get(getUrl)
                .catch(error => {
                    if (error && error.response) {
                        props.history.push(resolveCode(error.response.status))
                    } else {
                        props.history.push("/500")
                    }
                })
            setLoading(false)
            if (response && (response.status >= 200 && response.status <= 299)) {
                setClasses(response.data);
            }
        }
        getClasses()
    }, [])

    return (loading ? <Loader /> : <UploadComponent {...xtics} />)
}
export default Upload