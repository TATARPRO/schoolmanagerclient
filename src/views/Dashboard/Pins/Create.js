import React, { useState } from 'react';
import { Input,Col,FormGroup,Label } from 'reactstrap';
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import NewComponent from '../../../masterComponents/New/NewComponents'

const Create=(props)=>{
    const initialState ={
        Identifier: "",
        Amount: 0
    }
    const [errMsg, setError] = useState("")
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <FormGroup row>
                <Col xs="12" md="12">
                    <Label htmlFor="Pin">Unique Identifier</Label>
                    <Input type="text" required value={data.Identifier} name="Identifier" onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                    <Col xs="12" md="12">
                    <Label htmlFor="UsageCount">Amount of pins</Label>
                    <Input type="text" required value={data.Amount} name="Amount" onChange={handleChange} />
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
        if (data.Identifier.length < 3 || data.Identifier.length > 3 || data.Identifier == undefined) {
        setError("The pin Identifier length must not be less or greater than 3 characters")
        return false
    }
    if(data.Amount == 0 || data.Amount == undefined){
        setError("Please specify the amount of pins to create!")
        return false
    }
    return true
}
    const Add = async (event) => {
        event.preventDefault();
        if(!validateData()) return
        setLoading(true);
        let addUrl = "pins/createpins/";
        let response = await API.post(addUrl, data)
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
        if (response && (response.status >= 200 || response.status <= 299)) {
            props.history.push("/dashboard/pins/index");
        }
    }
    const cancel = (event) => {
        event.preventDefault();
        props.history.push("/dashboard/pins/index");
    }
    const xtics={
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: Add,
        Title: {
            Name: "Pin",
            Description: "Add a pin to enroll new students into."
        }
    }
    return (loading ? <Loader />:<NewComponent {...xtics}/>
    )
}
export default Create;