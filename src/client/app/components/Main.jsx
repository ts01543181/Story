import React,{Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './app.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

class Main extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/home" component={App}/>
                    <Route exact path="/signup" component={Signup}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Main