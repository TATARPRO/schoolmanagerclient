import React, { useState, useEffect } from 'react';
import { Input,Col,FormGroup,Label } from 'reactstrap';
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import DeleteComponent from '../../../masterComponents/Deletes/DeleteComponents'

const Delete=(props)=>{
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
                    <Input type="text" required id="Email" value={data.Email} name="Email" disabled />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="Username">Password</Label>
                    <Input type="text" required id="Password" value={data.Password} name="Password" disabled />
                </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Confirm Password</Label>
                    <Input type="text" required value={data.ConfirmPassword} name="ConfirmPassword" disabled />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="6">
                    <Label htmlFor="Username">Class</Label>
                    <Input type="select" name="ClassId" id="ClassId" value={data.ClassId} disabled>
                            <option value="">Please select...</option>
                            {classes.map((value) => {
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
        let editUrl = `userpasswords/delete/${data.Id}`;
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
            props.history.push("/dashboard/users/index")
        }
    }
    const cancel =(event) => {
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
        getClasses();
        Retrieve();
    }, [])
    const xtics={
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: onDelete,
        Title: {
            Name: "User",
            Description: "Are you sure you want to delete this class which distinguishes student's designations?"
        }
    }
    return (loading ? <Loader />: <DeleteComponent {...xtics}/> )
}
export default Delete;