import React, { useState, useEffect } from 'react';
import { Input, Col, FormGroup, Label, Table } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import EditComponent from '../../../masterComponents/Edits/EditComponents'

const Edit = (props) => {
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
                        <Input type="text" required id="Username" value={data.Username} name="Username" disabled />
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
                            <option value="Admin">Admin</option>
                        </Input>
                    </Col>
                </FormGroup>
                <hr />
                <h2>Roles</h2>
                <Table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.Roles.length < 1 ? <tr key={0}><td colSpan={3}>......No role assigned</td></tr> :
                            (
                                data.Roles.map((item, index) => {
                                    return <tr>
                                    <td key={index}>{index}</td>
                                    <td value={item}>{item}</td>
                                    </tr>
                                })
                            )
                        }
                    </tbody>
                </Table>
            </>
        )
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value })
    }
    const validateData = () => {
        if (data.Password == "" || data.Password === undefined) {
            setError("Please enter a password.")
            return false
        }
        if(data.Password != data.ConfirmPassword){
            setError("The password and confirmation password does not match")
            return false
        }
        return true
    }
    const onSave = async (event) => {
        event.preventDefault();
        if (!validateData()) return
        setLoading(true);
        let editUrl = `userpasswords/update/`;
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
            props.history.push("/dashboard/users/index")
        }
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/users/index");
    }
    useEffect(() => {
        setLoading(true)
        const Retrieve = async () => {
            let getUrl = `userpasswords/getuserpassword/${props.match.params.id}`;
            if (props.match.params.id === null || props.match.params.id === undefined) {
                props.history.push("/dashboard/users/index");
            }
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
                setData(response.data);
            }
        }
        const getClasses = async () => {
            let getUrl = "classes/getclasses/"
            let response = await API.get(getUrl)

            if (response && (response.status >= 200 && response.status <= 299)) {
                setLoading(false);
                setClasses(response.data);
            }
        }
        Retrieve();
        getClasses();
    }, [])
    const xtics = {
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: onSave,
        Title: {
            Name: "User",
            Description: "Edit a class which primary distinguishes student's designations."
        }
    }
    return (loading ? <Loader /> : <EditComponent {...xtics} />)
}
export default Edit;