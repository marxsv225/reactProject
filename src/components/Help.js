import React, { Component } from 'react'
import Title from "./Title";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


export default class Help extends Component {
    render() {
        return (
            <section className="fondhelp">
                <div className="container">
                    <Title title="NEED HELP ?" />
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <Form>
                                <Form.Row>
                                    <Col xs={12} md={5}>
                                        <Form.Control placeholder="City" />
                                    </Col>
                                    <Col xs={12} md={5}>
                                        <Form.Control placeholder="State" />
                                    </Col>
                                    <Col xs={12} md={2}>
                                        <Button type="submit" className="mb-2">
                                            Submit
                                        </Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </section>
        )
    }
}
