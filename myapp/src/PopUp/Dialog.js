
import React, { Component } from 'react';
import './Dialog.css';

class Dialog extends Component{

    constructor(props){
        super(props);
        this.myDiv = React.createRef();
        this.bott = React.createRef();
    }

    cancel=()=>{
        this.myDiv.current.style.display = 'none';
        this.bott.current.style.display ='none';
        this.props.cancelShow();
    }

    confirm=()=>{
        this.myDiv.current.style.display = 'none';
        this.bott.current.style.display ='none';
        this.props.confirmShow();
    }

     render(){
         return (
             <div>
                 <div id="fade" className="black_overlay" ref={this.bott}>
                 </div>
                 <div id="MyDiv" className="white_content" ref={this.myDiv}>
                         <div className="cont-header">
                         </div>
                         <span className="destext">地理位置授权</span>
                         <p className="locInfo">允许https://elis-ecocdn.pingan.com.cn/访问你当前的地理位置信息？</p>
                         <div className="bot-content">
                                 <span className="btn-cancel" onClick={this.cancel}>取消</span>
                                 <span className="btn-confirm" onClick={this.confirm}>确定</span>
                         </div>
                 </div>
             </div>
         )
     };
}

export default Dialog;


