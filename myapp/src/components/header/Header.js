import React from 'react';
import './Header.css';
// require('./font.js');

export default class Header extends React.Component {
  render = () => {
    return (
      <div className="content">
        <span className="title">{this.props.title}</span>
        <i className="iconfont icon-zuojiantou left-arrow"  />
      </div>
    );
  };
}
