import React, { Component } from 'react';
import Dialog from "../PopUp/Dialog";
import back  from '../pictures/back.png';
import Search from '../Search/Demo'
import './Appointment.css';


class Appointment extends Component{

    constructor(props){
        super(props);
        this.state={
            confirm : false,
            cancel : false
        }
    }

    getLocation=()=>{
        this.setState({
            confirm :true
        })
    }

    notGetLocation=()=>{
        this.setState({
            cancel : true
        })
    }


    go=()=>{
        this.props.history.goBack();
    }

    render(){
        const sear = this.state.confirm ? <Search/> : null;
        const address = this.state.confirm ? '西安' : '城市';
        const cancelShow = this.state.cancel ? <p className="ct-loc"><span className="red-ct">无法确定您的位置</span>，请打开定位服务或使用搜索功能查找门店</p>: null;
        return(
                 <div >
                     <Dialog  confirmShow={this.getLocation} cancelShow={this.notGetLocation}/>
                     <div className="mainPage">
                         <div className="appoint-head">
                             <div className="head-pic"><img src={back}  alt="返回" className="goback"  onClick={this.go}/></div>
                             <div className="head-text">预约去柜面</div>
                             <div className="location">{address}</div>
                         </div>
                         {cancelShow}
                         {sear}
                     </div>
                 </div>
        );
    }
}

export default Appointment;