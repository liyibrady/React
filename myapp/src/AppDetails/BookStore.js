import React,{Fragment} from 'react'
import 'rmc-picker/assets/index.css';
import 'rmc-picker/assets/popup.css';
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Picker from 'rmc-picker/lib/Picker';
import './BookStore.css'
import Header from '../components/header/Header'
import Tab from '../components/tab/Tab'

let searchInputArr = [
    {label: '预约号', placeholder: '输入预约号'},
    {label: '预约人手机号', placeholder: '输入预约人手机号'},
    {label: '图形验证码', placeholder: '输入图形验证码', havePic: true},
];

export default class BookStore extends React.Component{

        state = {
            status: 1,  // 1: 预约信息录入 0: 预约信息查询
            wheelShow: false,
            selectDate:false
        };

    render(){
        return(
            <Fragment>
                <Header title="预约去柜面"/>
                <div style={{height: '70px'}}/>
                <Tab changTap={(param)=>this.setState({status: param})}/>
                {this.state.status ?
                    <Fragment>
                        <div className="page-content">
                            <Input label={'预约人姓名'} placeholder={'请输入预约人姓名'} />
                            <Select label={'证件类型'} placeholder={'请选择证件类型'} onClick={()=>this.setState({wheelShow: true})}/>
                            <Input label={'证件号码'} placeholder={'请输入证件号码'} />
                            <Input label={'预约人手机号'} placeholder={'请输入预约人手机号'} />
                            <Select label={'预约柜面'} value="陕西分公司现客户服务中心"/>
                            <Select label={'预约时间'} onClick={()=>this.setState({selectDate: true})}/>
                            <Select label={'服务项目'} />
                            <div className="remark">
                                <p>备注栏</p>
                                <textarea placeholder="如有需要请输入其他说明信息"/>
                                <p>最多可输入100字 0/100</p>
                            </div>
                        </div>
                        <span className="search-btn">提交</span>
                    </Fragment>
                :
                    <Fragment>
                        <div className="page-content">
                            {
                                searchInputArr.map((data, index)=>{
                                    return (
                                        <Input key={index} label={data.label} placeholder={data.placeholder} havePic={data.havePic}/>
                                    )
                                })
                            }
                        </div>
                        <span className="search-btn">查询</span>
                    </Fragment>
                }

                {this.state.wheelShow ?
                    <div className="mask">
                        <div
                            className="maskTop"
                            onClick={(e)=>{
                                console.log(e);

                                e.nativeEvent.stopImmediatePropagation();
                                this.setState({wheelShow: false});
                            }}>
                        </div>
                        <div className="wheelBtn">
                            <span style={{color: '#9b9b9b'}} onClick={()=>this.setState({wheelShow: false})}>取消</span>
                            <span style={{color: '#9b9b9b'}}>请选择证件类型</span>
                            <span style={{color: '#dc998a',marginRight:'60px'}} onClick={()=>this.setState({wheelShow: false})}>确定</span>
                        </div>
                        <div className="wheel">
                            <MultiPicker
                                selectedValue={this.state.value}
                                onValueChange={this.onChange}
                                onScrollChange={this.onScrollChange}
                            >
                                <Picker indicatorClassName="my-picker-indicator">
                                    <Picker.Item className="my-picker-view-item" value="1">身份证</Picker.Item>
                                    <Picker.Item className="my-picker-view-item" value="2">护照</Picker.Item>
                                    <Picker.Item className="my-picker-view-item" value="3">军人证</Picker.Item>
                                    <Picker.Item className="my-picker-view-item" value="4">户口本</Picker.Item>
                                </Picker>
                            </MultiPicker>
                        </div>
                    </div> : null}

            </Fragment>


        );
    }
}



class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showTouch: false
        };
    }
    render() {
        const props = this.props;
        return (
            <div key={props.key}>
                <div
                    className={`${'input-item'} ${this.state.showTouch ? 'input-item-hover' : ''}`}
                    onTouchStart={()=>this.setState({showTouch:true})}
                    onTouchEnd={()=>this.setState({showTouch:false})}
                >
                    <span>{props.label}</span>
                    <input style={props.havePic ? {width: '100px'}: {}} placeholder={props.placeholder}/>
                    {props.havePic ?
                        <div className="auth-code">

                        </div>
                        : null}
                </div>
                <hr />
            </div>
        )
    }
}

class Select extends React.Component {
    state = {
        showTouch: false
    };
    render() {
        const props = this.props;
        return (
            <div key={props.key} onClick={()=>props.onClick?props.onClick():{}}>
                <div
                    className={`${'input-item'} ${this.state.showTouch ? 'input-item-hover' : ''}`}
                    onTouchStart={()=>this.setState({showTouch:true})}
                    onTouchEnd={()=>this.setState({showTouch:false})}
                >
                    <span>{props.label}</span>
                    <p style={props.value ? {}: {color: '#828281'}}>{props.value || props.placeholder}</p>
                    <div className="right-arrow-div">
                        <i className="iconfont icon-youjiantou" style={{fontSize: '28px',color: '#e5e5e5'}}/>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
