import React, { useState, useEffect } from 'react';
import { Input,Col,FormGroup,Label,Row } from 'reactstrap';
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import DeleteComponent from '../../../masterComponents/Deletes/DeleteComponents'

const Delete=(props)=>{
    const [data, setData] = useState({});
    const [errMsg, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [classes, setClasses] = useState([])
    const Content = () => {
        return (
            <>
            <p className="text-danger">{errMsg}</p>
            <Row>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="Id">Admission Number</Label>
                    <Input type="text" disabled required id="Id" value={data.Id} name="Id"  />
                </FormGroup>
                </Col>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="Surname">Surname</Label>
                    <Input type="text" disabled required id="Surname" value={data.Surname} name="Surname"  />
                </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="MiddleName">Middle Name</Label>
                    <Input type="text" disabled required id="MiddleName" value={data.MiddleName} name="MiddleName"  />
                </FormGroup>
                </Col>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="hf-ClassName">Last Name</Label>
                    <Input type="text" disabled required id="hf-ClassName" value={data.FirstName} name="FirstName"  />
                </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6">
                <FormGroup row>
                            <Label htmlFor="ClassId">Students' class</Label>
                            <Input type="select" disabled name="ClassId" id="ClassId" value={data.ClassId} >
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
                    <Input type="date" disabled required id="hf-ClassName" value={data.DOB} name="DOB"  />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="NameOfParent">Name of Parent</Label>
                    <Input type="text" disabled required id="NameOfParent" value={data.NameOfParent} name="NameOfParent"  />
                </FormGroup>
                </Col>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="hf-ClassName">Contact Phone</Label>
                    <Input type="text" disabled required id="hf-ClassName" value={data.ContactPhone} name="ContactPhone"  />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col xs="12" md="6">
            <FormGroup row>
                <Label htmlFor="hf-ClassName">Contact Address</Label>
                <Input type="text" disabled required id="hf-ClassName" value={data.ContactAddress} name="ContactAddress"  />
            </FormGroup>
            </Col>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="hf-ClassName">Nationality</Label>
                    <Input type="text" disabled required id="hf-ClassName" value={data.Nationality} name="Nationality"  />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col xs="12" md="6">
            <FormGroup row>
                <Label htmlFor="hf-ClassName">State</Label>
                <Input type="text" disabled required id="hf-ClassName" value={data.State} name="State"  />
            </FormGroup>
            </Col>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="hf-ClassName">L.G.A of Origin</Label>
                    <Input type="text" disabled required id="hf-ClassName" value={data.LGA} name="LGA"  />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col xs="12" md="6">
            <FormGroup row>
                <Label htmlFor="hf-ClassName">Admission Year</Label>
                <Input type="date" disabled required id="hf-ClassName" value={data.AdminYear} name="AdminYear"  />
            </FormGroup>
            </Col>
                <Col xs="12" md="6">
                <FormGroup check inline>
                            <Input className="form-check-input" disabled type="checkbox" id="Graduated" name="Graduated" value={data.Graduated} />
                            <Label check className="form-check-label" htmlFor="Graduated">Graduated?</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col xs="12" md="6">
            <FormGroup>
                        <Label htmlFor="Category">Students' category</Label>
                        <Input type="select" disabled name="Category" id="Category" value={data.Category} >
                        <option value="k">Please select...</option>     
                        <option value="0">Junior Category</option>
                        <option value="1">Senior Category</option>
                        </Input>
                    </FormGroup>
            </Col>
                <Col xs="12" md="6">
                <FormGroup row>
                    <Label htmlFor="ExpectedGradYear">Expected Graduation Year</Label>
                    <Input type="date" disabled required id="ExpectedGradYear" value={data.ExpectedGradYear} name="ExpectedGradYear"  />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col xs="12" md="6">
            <FormGroup row>
                <Label htmlFor="GradYear">Graduation Year</Label>
                <Input type="date" disabled required id="GradYear" value={data.GradYear} name="GradYear"  />
            </FormGroup>
            </Col>
                <Col xs="12" md="6">
                <FormGroup>
                            <Label htmlFor="Category">Status</Label>
                            <Input type="select" disabled name="Status" id="Status" value={data.Status} >
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
    const onDelete = async (event) => {
        event.preventDefault();
        setLoading(true);
        let editUrl = `students/delete/${data.Id}`;
        let response = await API.delete(editUrl)
        .catch(error=> {
            let rdr = resolveCode(error.response.status);
            if(rdr) props.history.push(rdr);
            if(error.response.status >= 400 && error.response.status <= 499){
              setLoading(false);
              setError(error.response.data.title);
            }else{
              props.history.push(resolveCode(error.response.status));
            }
        })
        setLoading(false);
        if (response && (response.status >= 200 && response.status <= 299)) {
            props.history.push("/dashboard/students/index")
        }
    }
    const cancel =(event) => {
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
                let rdr = resolveCode(error.response.status);
                if(rdr) props.history.push(rdr);
                if(error.response.status >= 400 && error.response.status <= 499){
                  setLoading(false);
                  setError(error.response.data);
                }else{
                  props.history.push(resolveCode(error.response.status));
                }
            })
            if (response && (response.status >= 200 && response.status <= 299)) {
                setData(response.data);
            }
            await getClasses()
            setLoading(false);
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
    const xtics={
        Content: Content(),
        Cancel: cancel,
        HandleSubmit: onDelete,
        Title: {
            Name: "Student",
            Description: "Are you sure you want to delete this student?"
        }
    }
    return (loading ? <Loader />: <DeleteComponent {...xtics}/> )
}
export default Delete;