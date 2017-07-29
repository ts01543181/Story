import React,{Component} from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'
import $ from 'jquery'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.createAccount = this.createAccount.bind(this)
    }

    createAccount() {
        let user = {
            username: $('.username input').val(),
            password: $('.password input').val()
        }

        axios.post('/signup', user)
        .then(data => {
            if (data.data !== 'success') {
                console.log('fail')
            }
        })

        this.props.history.push('/')
    }

    render() {
        return (
            <div className="login-container">
                <h1 className="login-header"><span id="loginS">S</span><span id="tory">tory</span></h1>
                <div className="username"><span>username</span><input type="text" /></div>
                <div className="password"><span>password</span><input type="password" /></div>
                <button onClick={this.createAccount}>Create Account</button>
            </div>
        )
    }
}

export default withRouter(Login)