import React, { useState, useEffect } from 'react';
import { Input,Col,FormGroup,Label } from 'reactstrap';
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import DeleteComponent from '../../../masterComponents/Deletes/DeleteComponents'

const Delete=(props)=>{
    const initialState ={
        Id: "",
        Value: "",
        UsageCount: 0,
        StudentId: "",
        TermId: 0,
        SessionId: 0,
        Expired: true,
        Validity: new Date().toUTCString()
    }
    const [stdResp, setStd] = useState([])
    const [trmResp, setTrm] = useState([])
    const [sshResp, setSsh] = useState([])
    const [errMsg, setError] = useState("");
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <FormGroup row>
                <Col xs="12" md="12">
                    <Label htmlFor="Pin">Pin</Label>
                    <Input type="text" required value={data.Value} name="Value"disabled />
                </Col>
            </FormGroup>
            <FormGroup row>
            <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Student Name</Label>
                        <Input type="select" name="StudentId" value={data.StudentId}disabled>
                            <option value="">Please select...</option>
                            {stdResp.map((value) => {
                                return (
                                    <option value={value.Id}>{value.StudentName}</option>
                                )
                            })}
                        </Input>
                    </Col>
                <Col xs="12" md="6">
                    <Label htmlFor="UsageCount">Number of Times Used</Label>
                    <Input type="text" required value={data.UsageCount} name="UsageCount"disabled />
                </Col>
            </FormGroup>
            <FormGroup row>
            <Col xs="12" md="6">
            <Label htmlFor="hf-ClassName">Term</Label>
            <Input type="select" name="TermId" value={data.TermId}disabled>
                <option value="">Please select...</option>
                {trmResp.map((value) => {
                    return (
                        <option value={value.Id}>{value.Name}</option>
                    )
                })}
            </Input>
        </Col>
        <Col xs="12" md="6">
                        <Label htmlFor="hf-ClassName">Session</Label>
                        <Input type="select" name="SessionId" value={data.SessionId}disabled>
                            <option value="">Please select...</option>
                            {sshResp.map((value) => {
                                return (
                                    <option value={value.Id}>{value.Name}</option>
                                )
                            })}
                        </Input>
                    </Col>
            </FormGroup>
            <FormGroup>
            <Col xs="12" md="6">
            <Input type="checkbox" required value={data.Expired} name="Expired"disabled />
            <Label htmlFor="Expired">Expired?</Label>
            </Col>
            <Col xs="12" md="6">
                    <Label htmlFor="UsageCount">Validity</Label>
                    <Input type="date" required value={data.Validity} name="Validity"disabled />
                </Col>
            </FormGroup>
            </>
        )
    }
    const onDelete = async (event) => {
        event.preventDefault();
        setLoading(true);
        let editUrl = `pins/delete/${data.Id}`;
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
            props.history.push("/dashboard/pins/index")
        }
    }
    const cancel =(event) => {
        event.preventDefault();
        props.history.push("/dashboard/pins/index");
    }
    useEffect(() => {
        setLoading(true)
        const getData =async()=>{
            const getTrm =async()=>{
                let trmGetUrl = "terms/getterms"
                let trms = await API.get(trmGetUrl)
                setTrm(trms.data)
            }
            const getSsh =async()=>{
                let sshGetUrl = "sessions/getsessions"
                let sshs = await API.get(sshGetUrl)
                setSsh(sshs.data)
            }
            const getStd =async()=>{
                let stdGetUrl = "students/getstudents"
                let stds = await API.get(stdGetUrl)
                setStd(stds.data)
            }
            await getTrm()
            await getSsh()
            await getStd()
            setLoading(false)
        }
        const Retrieve = async () => {
            let getUrl = `pins/getpin/${props.match.params.id}`;
            if (props.match.params.id === null || props.match.params.id === undefined) {
                props.history.push("/dashboard/pins/index");
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
        getData()
        Retrieve();
        setLoading(false)
    }, [])
    const xtics={
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: onDelete,
        Title: {
            Name: "Pin",
            Description: "Are you sure you want to delete this pin which distinguishes student's designations?"
        }
    }
    return (loading ? <Loader />: <DeleteComponent {...xtics}/> )
}
export default Delete;