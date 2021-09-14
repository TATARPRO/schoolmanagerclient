import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import API,{resolveCode} from '../../../Environment/Environment';

const Login =(props)=>{
  
  const initialCredentials={
    Username: "",
    Password: ""
  }
  const [credentials, setCredentials] = useState(initialCredentials);
  const [isSubmitting, setSubmitting] = useState(false);
  const [errMsg, setError] = useState("");
  const handleChange =(event)=>{
    const {name, value} = event.target;
    setCredentials({...credentials, [name]: value})
  }
  const Authenticate =async(event)=>{
    event.preventDefault();
    setSubmitting(true);
    let AuthUrl = "authentication/authenticateasync/";
    let response = await API.post(AuthUrl, credentials)
      .catch(error=> {
        if(error.response.status == 404){
          setSubmitting(false);
          setError(error.response.data);
        }else{
          props.history.push(resolveCode(error.response.status));
        }
    })
      if(response && (response.status >= 200 || response.status <= 299)){
        let Auth = {
          Username: response.data.Username,
          Roles: response.data.Roles,
          Expires: response.data.Expires,
          Token: response.data.Token
        };
        localStorage.setItem(window.location.host, JSON.stringify(Auth));
        setSubmitting(false);
        if(props.match.params.redirect === null || props.match.params.redirect === undefined){
          switch(response.data.Roles[0]){
            case "SuperAdmin*":
              props.history.push("/dashboard");
            break;
            case "SuperAdmin":
              props.history.push("/dashboard");
            break;
            case "Admin":
              props.history.push("/dashboard");
            break;
            case "Teacher":
              props.history.push("/dashboard");
            break;
            case "Student":
              props.history.push("/dashboard");
            break;
            default:
              props.history.push("/home");
            break;
          }
        }else{
          props.history.push(props.match.params.redirect);
        }
      }
  }
  useEffect(()=>{
  })
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <p className="text-danger">{errMsg}</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text"name="Username" placeholder="Username" value={credentials.Username} onChange={handleChange} autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="Password" placeholder="Password" value={credentials.Password} onChange={handleChange} autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="submit" onClick={Authenticate} color="primary" className="px-4">Login</Button>
                          {isSubmitting && <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading.."/> }
                          </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>To create a local account, you must have access priviledges and an access token
                      to complete the registration proces.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Login;
