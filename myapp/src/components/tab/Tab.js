import React from 'react';
import './Tab.css';

export default class Tab extends React.Component {
  state = {
    status: 1
  };
  render = () => {
    return (
      <div className="content">
        <div className="tab-item" onClick={()=>{this.setState({status: 1});this.props.changTap(1)}}>
          <span className={`${'tab-text'} ${this.state.status ? 'active' : ''}`}>预约信息录入</span>
        </div>
        <div className="tab-item" onClick={()=>{this.setState({status: 0});this.props.changTap(0)}}>
          <span className={`${'tab-text'} ${this.state.status ? '' : 'active'}`}>预约信息查询</span>
        </div>
      </div>
    );
  };
}
