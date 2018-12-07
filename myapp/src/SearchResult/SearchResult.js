import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SearchResult.css';


class SearchResult extends  Component{

    run(message){
        this.props.history.push({
            pathname:"/Map",
            query:{
                message:message
            }
        });
    }


    render(){
        const address = this.props.address;
        return(
            <div>
                <div className="part1">
                    <div className="info">
                       <div className="info-context">
                            <h4>{address.companyName}</h4>
                            <p>{address.companyAddress}</p>
                            <p>{address.workTime}</p>
                        </div>
                    </div>
                    <div className="map">
                        <div className="map-logo" onClick={this.run.bind(this)}></div>
                        <span className="map-word">查看地图</span>
                    </div>

                    <div className="order">
                        <Link to="/bookStore">
                            <div className="order-logo"></div>
                        </Link>
                        <span className="order-word">预约去柜面</span>
                    </div>
                </div>
                <div className="space"></div>
            </div>
        );

    }
}


export  default SearchResult;