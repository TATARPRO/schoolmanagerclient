import React, {useState, useEffect} from 'react'
import { Input, Col, FormGroup, Label, Row, Button, ButtonGroup, CardFooter,Card,CardHeader,CardBody,Form } from 'reactstrap';
import API, { resolveCode, Loader } from '../../../Environment/Environment'

const Recalculate=(props)=>{
const initialState ={
    ClassId: 0,
    SessionId: 0,
    TermId: 0
}
    const [classes, setCls] = useState([])
    const [terms, setTrm] = useState([])
    const [sessions, setSsh] = useState([])
    const [New, setNew] = useState(initialState);
    const [errMsg, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const HandleSubmit = async (event) => {
        //event.preventDefault();
        if (!validateData()) return
        setLoading(true);
        let addUrl = "results/calculateresult/";
        let response = await API.post(addUrl, New)
        .catch(error=> {
            if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                props.history.push(resolveCode(error.response.status));
            }
            if(error.response && (error.response.status >= 400 && error.response.status <= 499)){
                if(resolveCode(error.response.status) == "") props.history.push(resolveCode(error.response.status))
              setLoading(false);
              setError(error.response.data);
            }
        })
        if (response && (response.status >= 200 || response.status <= 299)) {
        setLoading(false);
            alert('Results calculated successfully!')
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNew({ ...New, [name]: value })
    }
    const validateData =()=>{
       
    if (New.ClassId == 0 || New.ClassId == undefined) {
        setError("Please select a class")
        return false
    }
    if (New.TermId == 0 || New.TermId == undefined) {
        setError("Please select a term")
        return false
    }
    if (New.SessionId == 0 || New.SessionId == undefined) {
        setError("Please select a session")
        return false
    }
    return true
    }
    const cancel = (event) => {
        props.history.push("/dashboard");
    }

    useEffect(() => {
      
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
            if(clss && (clss.status >= 200 && clss.status <= 299)){
                
            setCls(clss.data)
            }
        }
        const getTrm =async()=>{
            let trmGetUrl = "terms/getterms"
            let trms = await API.get(trmGetUrl)
            if(trms && (trms.status >= 200 && trms.status <= 299)){
                
            setTrm(trms.data)
                    }
        }
        const getSsh =async()=>{
            let sshGetUrl = "sessions/getsessions"
            let sshs = await API.get(sshGetUrl)
            if(sshs && (sshs.status >= 200 && sshs.status <= 299)){
                
            setSsh(sshs.data)
                }
        }
        const getData =async()=>{
            setLoading(true)
            await getCls()
            await getTrm()
            await getSsh()
        setLoading(false)
        }
        getData()
    }, [])

    return(
        loading? <Loader />:
            (
                <Row>
        <Col md="2"></Col>
        <Col xs="12" md="8">
            <Card>
                <CardHeader>
                <h3>Calculate result</h3>
                <p className="text-danger">
                    Before Calculating results, ensure that all scoresheets have been uploaded successfully.
                    If all scoresheets have not been uploaded, the resulting analytics produced will be false.
                    If this occur, you can upload the missing subject and re-calculate it again to override the
                    former.
                </p>
                </CardHeader>
                <CardBody>
                    <Form className="form-horizontal">
                    <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Class</Label>
                        <Input type="select" name="ClassId" value={New.ClassId} onChange={handleChange}>
                            <option value="">Please select...</option>
                            {classes.map((value) => {
                                return (
                                    <option value={value.Id}>{value.Name}</option>
                                )
                            })}
                        </Input>
                    </Col>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Term</Label>
                        <Input type="select" name="TermId" value={New.TermId} onChange={handleChange}>
                            <option value="">Please select...</option>
                            {terms.map((value) => {
                                return (
                                    <option value={value.Id}>{value.Name}</option>
                                )
                            })}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Session</Label>
                        <Input type="select" name="SessionId" value={New.SessionId} onChange={handleChange}>
                            <option value="">Please select...</option>
                            {sessions.map((value) => {
                                return (
                                    <option value={value.Id}>{value.Name}</option>
                                )
                            })}
                        </Input>
                    </Col>
                </FormGroup>
            
                    </Form>
                </CardBody>
                <CardFooter>
                    <ButtonGroup>
                        <Button type="submit" onClick={()=>cancel()} size="sm" color="dark"><i className="fa fa-ban"></i>Cancel</Button>
                        <Button type="submit" onClick={()=>HandleSubmit()} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i>Calculate</Button>                
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Col>
        <Col md="2"></Col>
    </Row>
    )
       
    )
}
export default Recalculate