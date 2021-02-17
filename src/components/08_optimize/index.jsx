import React, { PureComponent } from "react";
import "./index.css";
/* 
PureComponent重写了shouldComponentUpdate()只有state或props数据发生变化才返回true 


*/
export default class Parent extends PureComponent {
  state = {
    carName: "迈巴赫",
  };
  changeCar = () => {
    this.setState({
      carName: "奔驰",
    });
  };
  /*   shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,nextState)
        console.log(this.props,this.state)
        return true
  } */
  render() {
    const { carName } = this.state;
    return (
      <div className="parent">
        <h2>我是Parent组件</h2>
        <span>我开的车是：{carName}</span>
        <br />
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName='宝马' />
      </div>
    );
  }
}
class Child extends PureComponent {
  render() {
    console.log("render");
    return (
      <div className="child">
        <h2>我从父组件接收到的车是:{this.props.carName}</h2>
      </div>
    );
  }
}
