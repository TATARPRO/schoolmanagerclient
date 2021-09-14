import React, { useState} from 'react';
import { Input,Col,FormGroup,Label } from 'reactstrap';
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import NewComponent from '../../../masterComponents/New/NewComponents'

const New=(props)=>{
    const initialState = {
        Id: 0,
        Name: "",
        Value: "",
        ConcurrencyStamp: ""
    }
    const [errMsg, setError] = useState("");
    const [New, setNew] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <FormGroup row>
                <Col xs="12" md="9">
                    <Label htmlFor="hf-ClassName">Setting Name</Label>
                    <Input type="text" required id="hf-ClassName" value={New.Name} name="Name" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs="12" md="9">
                    <Label htmlFor="hf-ClassName">Value</Label>
                    <Input type="text" required id="hf-ClassName" value={New.Value} name="Value" onChange={handleChange} />
                </Col>
            </FormGroup>
            </>
        )
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNew({...New, [name]: value })
    }
    const validateData =()=>{
        if (New.Name == "" || New.Name == undefined) {
        setError("Please enter a setting name.")
        return false
    }
    if(New.Value == "" || New.Value == undefined){
        setError("Please enter a setting value")
        return false
    }
    return true
}
    const Add = async (event) => {
        event.preventDefault();
        if(!validateData()) return
        setLoading(true);
        let addUrl = "settings/create/";
        let response = await API.post(addUrl, New)
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
            props.history.push("/dashboard/Settings/index");
        }
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/settings/index");
    }
    const xtics={
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: Add,
        Title: {
            Name: "Setting",
            Description: "Add basic settings which some operations rely on."
        }
    }
    return (loading ? <Loader />:<NewComponent {...xtics}/>
    )
}
export default New;