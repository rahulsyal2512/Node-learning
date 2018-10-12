import React, { Component } from 'react';
import Helper from './Helper';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    email = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    password = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    login = () => {
        let body = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        });
        let res = Helper("/login", 'POST', body);
        res.then((res) => {
            console.log(res);
            if(res.msg=== -1)
            {
                alert("Login failed");
            }
            else
            {
                alert("Login successfull");
            }
        });
    }


    render() {
        var mystyle =
            {
                fontSize: '40px',
            };
        var background = 
        {
            height:"662px",
            width:"100%"
        }
        return (
            <div className="container-fluid p-0 m-0" >
            <div className="bg-primary" style={background} >
                <div className="unix-login " >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-lg-offset-3">
                                <div className="login-content">
                                    <div className="login-logo">
                                        <span className="quick " style={mystyle} >Login</span>
                                    </div>
                                    <div className="login-form">
                                        <form>
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" placeholder="Email" onKeyDown={(e)=>{
                                                    if (e.keyCode === 13) {
                                                        this.login();
                                                    }
                                                }} onChange={(e) => this.email(e)} required/>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" placeholder="Password" onKeyDown={(e)=>{
                                                    if (e.keyCode === 13) {
                                                        this.login();
                                                    }
                                                }} onChange={(e) => this.password(e)} required />
                                            </div>
                                            <div className="checkbox">
                                                <label className="pull-right">
                                                    <a href="">Forgotten Password?</a>
                                                </label>

                                            </div>
                                            <button type="button" className="btn btn-warning btn-flat m-b-30 m-t-30" onClick={(e) => this.login()}>
                                                <span className="login2"> Sign in</span></button>
<br></br>
                                            <div className="register-link m-t-15 text-center">
                                                <p>Dont have account ? <Link to="./Signup" className="btn btn-warning"> Sign Up Here</Link>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

</div>
       </div>
        );
    }
    toggleLoader(){
        this.setState({
            loader: !this.state.loader
        });
    }
    componentDidMount(){
        this.toggleLoader();
    }
}

export default Login;
