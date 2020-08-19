import React, { Component } from 'react'
import axios from 'axios';

export default class Essai extends Component {

    state = {
        data:{
            username:"",
            emailid:""
        }
    }

    handleChange=({currentTarget:input})=>{
        const data = {...this.state.data};
        data[input.name]=input.value;
        this.setState({data});
    }

    handleSubmit = async(e) =>{

        e.preventDefault();
        const headers = {
            'Access-Control-Allow-Origin': '*',
        };

        const formData = {
            username:this.state.data['username'],
            emailid:this.state.data['emailid'],
        };

        await axios.post('http://localhost/reactproject/api/index.php', formData,{headers})
        .then(result => {
            this.setState({formData:formData});
          })
          .catch(error => this.setState({ error: error.message }));
    }
    render() {
        const {data}=this.state;
        return (
            <div>
                <form onSubmit= {this.hundleSubmit} >

                    <label>Name</label>
                    <input type="text" name="username" value={data['username']} onChange={this.handleChange} />

                    <label>Email ID:</label>
                    <input type="text" name="emailid" value={data['emailid']} onChange={this.handleChange}  />

                    <input type="submit" className="button" name="valider"  value="Register"/>
                </form>
            </div>
        )
    }
}
