import React, { Component } from 'react';
import Helper from './Helper';
import './signup.css';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName:'',
            lastName:''
        };
    }

    email = (e) => {
        this.setState({ email: e.target.value });
    }
    password = (e) => {
        this.setState({ password: e.target.value });
    } 
    firstname= (e) => {
        this.setState({ firstName: e.target.value });
    }
    lastname = (e) => {
        this.setState({ lastName: e.target.value });
    }
   
    register = () => {
        let body = JSON.stringify({
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.password
        });
    
        let res = Helper("/signup", 'POST', body);
        res.then((res)=>{
            alert("SignUp Successfull");
        })
        } 
  render() {
      var mystyle= 
      {
            fontSize:'40px'
      };
    return (
 <div  className="bg-primary">     
<div className="unix-login full">
    <div className="container ">
        <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
                <div className="login-content">
                    <div className="login-logo">
                        <a href="index-2.html"><span className="quick "style={mystyle}>Register</span></a>
                    </div>
                    <div className="login-form">
                        <h4>Sign Up</h4>
                        <form>
                                <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" placeholder="First Name" onChange={(e)=>this.firstname(e)} required/>
                                </div>
                                <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name" onChange={(e)=>this.lastname(e)}/>
                                </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Email" onChange={(e)=>this.email(e)}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" onChange={(e)=>this.password(e)}/>
                            </div>
                            <button type="button" className="btn btn-warning btn-flat m-b-30 m-t-30" onClick={this.register} >Register</button>
                            <div className="register-link m-t-15 text-center">
                                <p>Already have account ? <Link to="./Login" className="btn btn-warning"> Sign in</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  
</div>
    );
  }
}

export default Signup;
