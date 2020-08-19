import React, {useState, useEffect} from 'react'
// import axios from 'axios';
import Title from "./Title";
import Form from './Form'
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
// import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
import firebaseDb from '../Config'
// import PropTypes from 'prop-types';


 const Help = () => {

    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')
    
    useEffect(() =>{
        firebaseDb.child('contacts').on('value', snapshot=>{
           if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                })
           }
        })
    }, [])

    const addOrEdit = obj =>{
        firebaseDb.child('contacts').push(
        obj,
        err => {
            if (err) {
                console.log(err)
            }
        }
        )
    }
        return (
            <section className="fondhelp">
                <div className="container">
                    <Title title="NEED HELP ?" />
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <p className="intro">
                                cette image sans plus attendre dans le cadre d’un essai gratuit.
                                En outre, accédez <br />
                            </p>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <Form {...({addOrEdit, currentId, contactObjects})} />
                        </div>
                        <div className="col-md-5">
                        <table className="table table-borderless table-striped">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Full name</th>
                                            <th>Email</th>
                                            <th>Username</th>
                                            <th>Password</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="thead-light">
                                        {
                                            Object.keys(contactObjects).map(id => {
                                                return (
                                                    <tr key={id}>
                                                        <td>{contactObjects[id].fullname}</td>
                                                        <td>{contactObjects[id].email}</td>
                                                        <td>{contactObjects[id].username}</td>
                                                        <td>{contactObjects[id].password}</td>
                                                        <td>
                                                            <a className="btn text-primary" onClick={()=>{setCurrentId(id)}}>
                                                                <BsPencil />
                                                            </a>
                                                            <a className="btn text-danger">
                                                                <BsFillTrashFill />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </section>
        )
}
export default Help;