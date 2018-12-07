import React, { Component } from 'react';
import './Demo.css';
import sousuo from '../pictures/sousuo2.png'
import SearchResultList from '../SearchResult/SearchResultList';

class Demo extends Component{

    constructor(){
        super();
        this.state={
            filter:''
        }
    }

    filterAddress=(e)=>{
             const fitext = this.word.value;
             this.setState({
                 filter: fitext
             })
             console.log(fitext);
    }


    render() {

        return (
            <div>
                <div className="ct-box">
                    <div className="search-bx">
                        <img src={sousuo} alt="搜索图标"/>
                        <input type="text" className="inp-text" ref={word=>this.word = word}/>
                    </div>
                    <input className="btn-sea" type="button" value="搜索" onClick={this.filterAddress}/>
                </div>
                <div>
                   <SearchResultList keyWord={this.state.filter}/>
                </div>

            </div>
        );
    }
}




export default Demo;