import React, { useState, useEffect} from 'react';
import { Input,Col,FormGroup,Label } from 'reactstrap';
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import NewComponent from '../../../masterComponents/New/NewComponents'

const New=(props)=>{
    const [errMsg, setError] = useState("");
    const [data, setData] = useState({});
    const [classes, setClasses] = useState([])
    const [loading, setLoading] = useState(false);
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="Username">Username</Label>
                    <Input type="text" required id="Username" value={data.Username} name="Username" onChange={handleChange} />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Email</Label>
                    <Input type="text" required id="Email" value={data.Email} name="Email" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="Username">Password</Label>
                    <Input type="text" required id="Password" value={data.Password} name="Password" onChange={handleChange} />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Confirm Password</Label>
                    <Input type="text" required value={data.ConfirmPassword} name="ConfirmPassword" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="Username">Class</Label>
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
                    <Label htmlFor="Username">Role</Label>
                    <Input type="select" name="Role" id="Role" value={data.Role} onChange={handleChange}>
                            <option value="">Please select...</option>
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Admin">Administrator</option>
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
        if(data.Username == "" || data.Username === undefined){
            setError("The Username field is required")
            return false
        }
        if(data.Password == "" || data.Password === undefined){
            setError("Please enter a password.")
            return false
        }
        if(data.Password != data.ConfirmPassword){
            setError("The password and confirmation password does not match")
            return false
        }
        return true
    }
    const Add = async (event) => {
        event.preventDefault();
        if(!validateData()) return
        setLoading(true);
        let addUrl = "userpasswords/create/";
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
            props.history.push("/dashboard/users/index");
        }
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/users/index");
    }
    useEffect(() => {
        setLoading(true)
        const getClasses = async () => {
            let getUrl = "classes/getclasses/"
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
                setClasses(response.data);
                setLoading(false)
            }
        }
        getClasses();
    }, [])
    const xtics={
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: Add,
        Title: {
            Name: "User",
            Description: "Add a class to enroll new students into."
        }
    }
    return (loading ? <Loader />:<NewComponent {...xtics}/>
    )
}
export default New;