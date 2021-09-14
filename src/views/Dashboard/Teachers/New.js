import React, { useState, useEffect} from 'react';
import { Input,Col,FormGroup,Label, InputGroup, Button, InputGroupAddon,InputGroupText } from 'reactstrap';
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import NewComponent from '../../../masterComponents/New/NewComponents'
import Table from 'reactstrap/lib/Table';

const New=(props)=>{
    const initialState ={
        Surname: "",
        MiddleName: "",
        FirstName: "",
        UserName: "",
        ContactAddress: "",
        ContactPhone: "",
        Nationality: "",
        State: "",
        LGA: "",
        Status: 0,
        SubjectAllocations: []
    }
    const [errMsg, setError] = useState("");
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [subjects, setSubjects] = useState([])
    const [classes, setClasses] = useState([])
    const [tempSelection, setSelection] = useState({Subject: {Name: "", Id:0}, Class:{Name: "", Id:0}})
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Surname</Label>
                    <Input type="text" required  value={data.Surname} name="Surname" onChange={handleChange} />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Middle Name</Label>
                    <Input type="text" value={data.MiddleName} name="MiddleName" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">First Name</Label>
                    <Input type="text" required value={data.FirstName} name="FirstName" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                    <Col md="6" xs="12">
                        <Label>Username</Label>
                        <Input type="text" name="Username" onChange={handleChange} />
                    </Col>
                    <Col md="6" xs="12">
                        <Label>Email</Label>
                        <Input type="email" name="Email" onChange={handleChange} />
                    </Col>
            </FormGroup>
            <FormGroup row>
                    <Col md="6" xs="12">
                        <Label htmlFor="Password">Password</Label>
                        <Input type="password" id="Password" name="Password" onChange={handleChange} />
                    </Col>
                    <Col md="6" xs="12">
                        <Label htmlFor="ConfirmPassword">Confirm Password</Label>
                        <Input type="password" id="ConfirmPassword" name="ConfirmPassword" onChange={handleChange} />
                    </Col>
                </FormGroup>
                
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Contact Address</Label>
                    <Input type="text" required value={data.ContactAddress} name="ContactAddress" onChange={handleChange} />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Contact Phone</Label>
                    <Input type="text" required value={data.ContactPhone} name="ContactPhone" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Nationality</Label>
                    <Input type="text" value={data.Nationality} name="Nationality" onChange={handleChange} />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">State</Label>
                    <Input type="text" required value={data.State} name="State" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">L.G.A</Label>
                    <Input type="text" value={data.LGA} name="LGA" onChange={handleChange} />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Status</Label>
                    <Input type="select" name="Status" value={data.Status} onChange={handleChange}>
                            <option value="k">Please select...</option>    
                            <option value="0">Active</option>
                            <option value="1">Dismissed</option>
                    </Input>
                </Col>
            </FormGroup>
            <hr />
            <h2>Subject Allocation</h2>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Subject</Label>
                    <Input type="select" name="Subject" value={tempSelection.Subject.Id} onChange={handleSelection}>
                    {subjects.map((value) =>{
                        return <option value={value.Id}>{value.Name}</option>
                    })}
                    </Input>
                </Col>
                <Col xs="12" md="6">
               
                    <Label htmlFor="hf-ClassName">Class</Label>
                <InputGroup>
                <Input type="select" name="Class" value={tempSelection.Class.Id} onChange={handleSelection}>
                {classes.map((value) =>{
                    return <option value={value.Id}>{value.Name}</option>
                })}
               </Input>
               <Button type="button" className="btn btn-sm btn-info" value="Add" onClick={() =>addAllocation()} />
              </InputGroup>
            </Col>
            
            </FormGroup>
            
            <FormGroup row>
            <Table className="table" bordered responsive striped>
            <thead>
            <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Class</th>
            <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {data.SubjectAllocations.length < 1?<tr key={0}><td colSpan={4}>......No subject(s) allocated</td></tr>:(
                data.SubjectAllocations.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.Subject.Name}</td>
                            <td>{value.Class.Name}</td>
                            <td><input type="button" className="btn btn-sm btn-danger" value="Delete" onClick={() => removeAllocation(value.Subject.Id, value.Class.Id)} /></td>
                        </tr>
                    )
                })
            )}
            </tbody>
            </Table>
            </FormGroup>
            </>
        )
    }
    useEffect(()=>{
        setLoading(true)
        let getClassUrl = "classes/getclasses/"
        let getSubjectUrl = "subjects/getsubjects/"
        const getCla = async()=>{
            let claResponse = await API.get(getClassUrl)
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
            if (claResponse && (claResponse.status >= 200 && claResponse.status <= 299)) setClasses(claResponse.data)
        }
        const getSub= async()=>{
            let subResponse = await API.get(getSubjectUrl)
            .catch(error =>{
                alert("Failed to retrieve subjects!")
            })
            setSubjects(subResponse.data)
        setLoading(false)
        }
        getCla()
        getSub()
    },[])
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({...data, [name]: value })
    }
    const handleSelection = (event) => {
        const { name, value } = event.target;
        let selected = []
        if(name == "Class"){
            selected = classes.filter((item)=>{
                return item.Id == value
            })
        }else{
            selected = subjects.filter((item)=>{
                return item.Id == value
            })
        }
        setSelection({...tempSelection, [name]: {Name: selected[0].Name, Id:value} })
    }
    const validateData =()=>{
       
    if(data.Surname === "" || data.Surname === undefined){
        setError("The Surname field is required")
        return false
    }
    if(data.FirstName === "" || data.FirstName === undefined){
        setError("The First Name field is required")
        return false
    }
    if(data.Username === "" || data.Username === undefined){
        setError("The Username field is required")
        return false
    }
    if(data.ContactAddress === "" || data.ContactAddress === undefined){
        setError("The Contact Address field is required")
        return false
    }
    if(data.ContactPhone === "" || data.ContactPhone === undefined){
        setError("The Contact Phone field is required")
        return false
    }
    if(data.Nationality === "" || data.Nationality === undefined){
        setError("The Nationality field is required")
        return false
    }
    if(data.State === "" || data.Stae === undefined){
        setError("The State year field is required")
        return false
    }
    
    return true
}
    const Add = async (event) => {
        event.preventDefault();
        if(!validateData()) return
        setLoading(true);
        let addUrl = "teachers/create/";
        let response = await API.post(addUrl, data)
        .catch(error=> {
            if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                props.history.push(resolveCode(error.response.status));
            }
            if(error.response && (error.response.status >= 400 && error.response.status <= 499)){
                if(resolveCode(error.response.status)) props.history.push(resolveCode(error.response.status))
              setLoading(false);
              setError(error.response.data);
            }
        })
        if (response && (response.status >= 200 || response.status <= 299)) {
        setLoading(false);
            props.history.push("/dashboard/teachers/index");
        }
    }
    const addAllocation=()=>{
        let selection = data.SubjectAllocations
        selection.push(tempSelection)
        setData({...data, ["SubjectAllocation"]: selection})
    }
    const removeAllocation=(sub, cla)=>{
        let previous = data.SubjectAllocations.filter((item)=>{
            let x = item.Subject.Id == sub
            let y = item.Class.Id == cla
            return !(x && y)
        })
        setData({...data, ["SubjectAllocations"]: previous})
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/teachers/index");
    }
    const xtics={
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: Add,
        Title: {
            Name: "Teacher",
            Description: "A good means of adding teachers into the institution."
        },
        Upload: {
            Link: "/dashboard/teachers/upload",
            Name: "teachers"
        }
    }
    return (loading ? <Loader />:<NewComponent {...xtics}/>
    )
}
export default New;