import React, { useState, useEffect } from 'react';
import { Input, Col, FormGroup, Label, Row } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import EditComponent from '../../../masterComponents/Edits/EditComponents'
import { bool } from 'prop-types';

const Edit = (props) => {
    const initialState = {
        Id: "",
        FirstName: "",
        Surname: "",
        MiddleName: "",
        DOB: new Date().toUTCString(),
        NameOfParent: "",
        ContactPhone: "",
        ContactAddress: "",
        Graduated: false,
        GradYear: new Date().toUTCString(),
        AdminYear: new Date().toUTCString(),
        ExpectedGradYear: new Date().toUTCString(),
        Status: "",
        Nationality: "",
        State: "",
        LGA: "",
        ClassId: 0,
        ConcurrencyStamp: ""
    }
    const [errMsg, setError] = useState("");
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(true)
    const [classes, setClasses] = useState([])
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <Row>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="hf-ClassName">Admission Number</Label>
                    <Input type="text" required id="hf-ClassName" value={data.Id} name="Id" onChange={handleChange} />
                </FormGroup>
                </Col>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="hf-ClassName">Surname</Label>
                    <Input type="text" required id="hf-ClassName" value={data.Surname} name="Surname" onChange={handleChange} />
                </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="hf-ClassName">Middle Name</Label>
                    <Input type="text" required id="hf-ClassName" value={data.MiddleName} name="MiddleName" onChange={handleChange} />
                </FormGroup>
                </Col>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="hf-ClassName">Last Name</Label>
                    <Input type="text" required id="hf-ClassName" value={data.FirstName} name="FirstName" onChange={handleChange} />
                </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6">
                <FormGroup row>
                            <Label htmlFor="ClassId">Students' class</Label>
                            <Input type="select" name="ClassId" id="ClassId" value={data.ClassId} onChange={handleChange}>
                            <option value="">Please select...</option>    
                            {classes.map((value) => {
                                    return (
                                        <option value={value.Id}>{value.Name}</option>
                                    )
                                })}
                            </Input>
                        </FormGroup>
                </Col>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="hf-ClassName">Date of Birth</Label>
                    <Input type="date" required id="hf-ClassName" value={data.DOB} name="DOB" onChange={handleChange} />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="NameOfParent">Name of Parent</Label>
                    <Input type="text" required id="NameOfParent" value={data.NameOfParent} name="NameOfParent" onChange={handleChange} />
                </FormGroup>
                </Col>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="hf-ClassName">Contact Phone</Label>
                    <Input type="text" required id="hf-ClassName" value={data.ContactPhone} name="ContactPhone" onChange={handleChange} />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col xs="12" md="6">
            <FormGroup row>
                <Label htmlFor="hf-ClassName">Contact Address</Label>
                <Input type="text" required id="hf-ClassName" value={data.ContactAddress} name="ContactAddress" onChange={handleChange} />
            </FormGroup>
            </Col>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="hf-ClassName">Nationality</Label>
                    <Input type="text" required id="hf-ClassName" value={data.Nationality} name="Nationality" onChange={handleChange} />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col xs="12" md="6">
            <FormGroup row>
                <Label htmlFor="hf-ClassName">State</Label>
                <Input type="text" required id="hf-ClassName" value={data.State} name="State" onChange={handleChange} />
            </FormGroup>
            </Col>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="hf-ClassName">L.G.A of Origin</Label>
                    <Input type="text" required id="hf-ClassName" value={data.LGA} name="LGA" onChange={handleChange} />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col xs="12" md="6">
            <FormGroup row>
                <Label htmlFor="hf-ClassName">Admission Year</Label>
                <Input type="date" required id="hf-ClassName" value={data.AdminYear} name="AdminYear" onChange={handleChange} />
            </FormGroup>
            </Col>
                <Col xs="12" md="6">
                <FormGroup check inline>
                            <Input className="form-check-input" type="checkbox" id="Graduated" name="Graduated" value={data.Graduated} onChange={handleChecked} />
                            <Label check className="form-check-label" htmlFor="Graduated">Graduated?</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col xs="12" md="6">
            <FormGroup>
                        <Label htmlFor="Category">Students' category</Label>
                        <Input type="select" name="Category" id="Category" value={data.Category} onChange={handleChange}>
                        <option value="k">Please select...</option>     
                        <option value="0">Junior Category</option>
                        <option value="1">Senior Category</option>
                        </Input>
                    </FormGroup>
            </Col>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="ExpectedGradYear">Expected Graduation Year</Label>
                    <Input type="date" required id="ExpectedGradYear" value={data.ExpectedGradYear} name="ExpectedGradYear" onChange={handleChange} />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col xs="12" md="6">
            <FormGroup row>
                <Label htmlFor="GradYear">Graduation Year</Label>
                <Input type="date" required id="GradYear" value={data.GradYear} name="GradYear" onChange={handleChange} />
            </FormGroup>
            </Col>
                <Col xs="12" md="6">
                <FormGroup>
                            <Label htmlFor="Category">Status</Label>
                            <Input type="select" name="Status" id="Status" value={data.Status} onChange={handleChange}>
                            <option value="k">Please select...</option>     
                            <option value="0">Active</option>
                            <option value="1">Dismissed</option>
                            <option value="2">Expelled</option>
                            <option value="3">Graduated</option>
                            <option value="4">Suspended</option>
                            <option value="5">Withdrawn</option>
                            </Input>
                        </FormGroup>
                </Col>
            </Row>
            </>
        )
    }
    const validateData =()=>{
        if (data.Id == "" || data.Id == undefined) {
        setError("Please enter students' Reg Number or Admission Number")
        return false
    }
    if(data.Surname == "" || data.Surname == undefined){
        setError("The Surname field is required")
        return false
    }
    if(data.FirstName == "" || data.FirstName == undefined){
        setError("The First Name field is required")
        return false
    }
    if(data.DOB == "" || data.DOB == undefined){
        setError("The Date of Birth field is required")
        return false
    }
    if(data.NameOfParent == "" || data.NameOfParent == undefined){
        setError("The Name of Parent field is required")
        return false
    }
    if(data.ContactPhone == "" || data.ContactPhone == undefined){
        setError("The Contact Phone field is required")
        return false
    }
    if(data.ContactAddress == "" || data.ContactAddress == undefined){
        setError("The Contact Address field is required")
        return false
    }
    if(data.AdminYear == "" || data.AdminYear == undefined){
        setError("The Admission year field is required")
        return false
    }
    if(data.Nationality == "" || data.Nationality == undefined){
        setError("The Nationality field is required")
        return false
    }
    if(data.State == "" || data.State == undefined){
        setError("The State field is required")
        return false
    }
    if(data.ClassId == 0 || data.ClassId == undefined){
        setError("The Class field is required")
        return false
    }
    if(data.Status == "" || data.Status == undefined){
        setError("The Status field is required")
        return false
    }
    return true
}
    const onSave = async (event) => {
        event.preventDefault();
        if(!validateData()) return
        setLoading(true);
        let editUrl = `students/update/`;
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
        if (response && (response.status >= 200 && response.status <= 299)) {
        setLoading(false);
            props.history.push("/dashboard/students/index")
        }
    }
    const handleChange = (event) => {
        const { name: Name, value } = event.target;
        setData({...data, [Name]: value })
    }
    const handleChecked =(event)=>{
        const { name, checked } = event.target;
        setData({ ...data, [name]: checked })
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/students/index");
    }
    useEffect(() => {
        const Retrieve = async () => {
            let getUrl = `students/getstudent/${props.match.params.id}`;
            if (props.match.params.id === null || props.match.params.id === undefined) {
                props.history.push("/dashboard/students/index");
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
            await getClasses()
        }
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
            if (response && (response.status >= 200 && response.status <= 299)) {
                setClasses(response.data);
            }
        }
        Retrieve();
    }, [])
    const xtics = {
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: onSave,
        Title: {
            Name: "Student",
            Description: "Edit a student which primary distinguishes student's designations."
        }
    }
    return (loading ? <Loader /> : <EditComponent {...xtics} />)
}
export default Edit;