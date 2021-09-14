import React from 'react';
import { Button, ButtonGroup, Card, CardBody, CardFooter, Form, CardHeader, Col, Row } from 'reactstrap';


const DeleteComponent = (props) => {
    const Title = (props) => {
        return (<>
            <h3>Delete {props.Name}</h3>
            <p className="text-danger">
                {props.Description}
            </p>
        </>)
    }
    return (
        <Row>
            <Col md="2"></Col>
            <Col xs="12" md="8">
                <Card>
                    <CardHeader>
                        <Title {...props.Title} />
                    </CardHeader>
                    <CardBody>
                        <Form action="" method="delete" className="form-horizontal">
                            {props.Content}
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <ButtonGroup>
                            <Button type="submit" onClick={props.Cancel} size="sm" color="dark"><i className="fa fa-ban"></i>Cancel</Button>
                            <Button type="submit" onClick={props.HandleSubmit} size="sm" color="danger"><i className="fa fa-dot-circle-o"></i> Delete</Button>                
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Col>
            <Col md="2"></Col>
        </Row>
    )
}
export default DeleteComponent;