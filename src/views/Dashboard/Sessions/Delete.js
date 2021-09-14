import React, { useState, useEffect } from 'react';
import { Input,Col,FormGroup,Label,Row } from 'reactstrap';
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import DeleteComponent from '../../../masterComponents/Deletes/DeleteComponents'

const Delete=(props)=>{
    const [New, setNew] = useState({});
    const [errMsg, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const Content = () => {
        return (
            <>
                <p className="text-danger">{errMsg}</p>
                <FormGroup row>
                    <Col xs="12" md="9">
                        <Label htmlFor="hf-ClassName">Session Name</Label>
                        <Input type="text" disabled id="hf-ClassName" value={New.Name} name="Name" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="9">
                        <Label htmlFor="hf-ClassName">Last Updated</Label>
                        <Input type="text" disabled id="hf-ClassName" value={New.LastUpdated} name="LastUpdated" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xs="12" md="9">
                        <Label htmlFor="hf-ClassName">Updater</Label>
                        <Input type="text" disabled id="hf-ClassName" value={New.Updater.UserName} name="Updater" />
                    </Col>
                </FormGroup>
            </>
        )
    }
    const onDelete = async (event) => {
        event.preventDefault();
        setLoading(true);
        let editUrl = `sessions/delete/${New.Id}`;
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
            props.history.push("/dashboard/Sessions/index")
        }
    }
    const cancel =(event) => {
        event.preventDefault();
        props.history.push("/dashboard/Sessions/index");
    }
    useEffect(() => {
        const Retrieve = async () => {
            let getUrl = `sessions/getsession/${props.match.params.id}`;
            if(props.match.params.id === null || props.match.params.id === undefined){
                props.history.push("/dashboard/Sessions/index");
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
                setNew(response.data);
            }
        }
        Retrieve();
    }, [])
    const xtics={
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: onDelete,
        Title: {
            Name: "Session",
            Description: "Warning! Are you sure you want to delete this school session. "
        }
    }
    return (loading ? <Loader />: <DeleteComponent {...xtics}/> )
}
export default Delete;