import React, { Component } from 'react';
import {BrowserRouter, Route,Link,Switch } from 'react-router-dom';
import './PerInfo.css';
import guitai from  '../pictures/guitai.png';
import touxiang from '../pictures/touxiang.png';
import Appointment from "../Appointment/Appointment";
import BookStore from "../AppDetails/BookStore";

class PerInfo extends Component{

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/order" component={Appointment}/>
                        <Route path="/bookStore" exact component={BookStore} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }

}


const Home = () => (

    <div>
        <img src={touxiang} alt="头像"/> Hi,Brady
        <ul>
            <li>
                <Link to="/order"><img src={guitai} alt="预约柜台"/></Link>
            </li>
        </ul>
    </div>
);

export  default PerInfo;