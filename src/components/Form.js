import React, {useState, useEffect} from 'react'
// import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
// import * as firebase from "firebase";
// import PropTypes from 'prop-types';


const  Forma = (props) => {

    const initialFieldValues = {
        email :'',
        fullname :'',
        password : '',
        username : ''
    }

    var [values, setValues] = useState(initialFieldValues)
    useEffect(() =>{
        if (props.currentId=='') {
            setValues({
                ...initialFieldValues
            })
        }
        else{
            setValues({
                ...props.contactObjects[props.currentId]
            })
        }
    }, [props.currentId, props.contactObjects])
    const handleInputChange = e => {
        var {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }
        return (
          <Form onSubmit = {handleFormSubmit}>
              <Form.Row>
                  <Col xs={12} md={5}>
                      <Form.Control placeholder="Name here" 
                          onChange={handleInputChange} id="fmane" name="fullname"/>
                  </Col>
                  <Col xs={12} md={5}>
                      <Form.Control
                          onChange={handleInputChange} placeholder="Email here" value={values.email} id="email" name="email"/>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col xs={12} md={5}> <br />
                      <Form.Control
                          onChange={handleInputChange} placeholder="username here" value={values.username} id="username" name="username"/>
                  </Col>
                  <Col xs={12} md={5}><br />
                      <Form.Control
                          onChange={handleInputChange} placeholder="password here" type="password" id="password" value={values.password} name="password"/>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col xs={12} md={12}>
                      <input type="submit" className="bouton-orange" value="Soumettre" />
                  </Col>
              </Form.Row>
          </Form>
        )
}

export default  Forma;