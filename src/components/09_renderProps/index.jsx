import React, { Component } from "react";
import "./index.css";
export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h2>我是父组件</h2>
        <A render={(name) => <B name={name} />}></A>
      </div>
    );
  }
}
class A extends Component {
  state = {
    name: "罗建辉",
  };
  render() {
    const { name } = this.state;
    return (
      <div className="child">
        <h2>我是A组件</h2>
        {/* {this.props.children} */}
        {this.props.render(name)}
      </div>
    );
  }
}
class B extends Component {
  render() {
    return (
      <div className="grand">
        <h2>我是B组件,{this.props.name}</h2>

      </div>
    );
  }
}
