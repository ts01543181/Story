import React,{Component} from 'react';
import {Redirect,Link, withRouter} from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)
        this.checkCredentials = this.checkCredentials.bind(this)
    }

    checkCredentials() {
        let user = {
            username: $('.username input').val(),
            password: $('.password input').val()
        }
        axios.post('/login', user)
        .then(data => {
            if (data.data === 'success') {
                this.props.history.push('/home', {user})
            } else {
                return
            }
        })
       
    }

    render() {
        return (
            <div className="login-container">
                <h1 className="login-header"><span id="loginS">S</span><span id="tory">tory</span></h1>
                <div className="username"><span>username</span><input type="text" /></div>
                <div className="password"><span>password</span><input type="password" /></div>
                <button onClick={this.checkCredentials}>Log In</button>
                <Link to="/signup"><button>Sign Up</button></Link>
            </div>
        )
    }
}

export default withRouter(Login)