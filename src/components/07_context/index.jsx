import React, { Component } from "react";
import "./index.css";
// MyContext是一个组件
const MyContext = React.createContext();
// Provider只适用于类组件，不可以用于函数组件。如果要使用函数式组件，则需要使用Consumer，Consumer适用于函数组件和类组件
const { Provider, Consumer } = MyContext;

export default class A extends Component {
  state = {
    name: "tom",
    age: 24,
  };
  render() {
    const { name, age } = this.state;
    return (
      <div className="parent">
        <h2>我是A组件</h2>
        <div>我的用户名是：{name}</div>
        <Provider value={{ name, age }}>
          <B />
        </Provider>
      </div>
    );
  }
}
class B extends Component {
  render() {
    return (
      <div className="child">
        <span>我是B组件</span>
        <C />
      </div>
    );
  }
}
/* class C extends Component {
    //只有声明了才可以使用，contextType是固定写法
  static contextType = MyContext;
  render() {
    return (
      <div className="grand">
        <h2>我是C组件</h2>
        <span>我从A组件接收到的名字叫：{this.context.name}，年龄是{this.context.age}</span>
      </div>
    );
  }
} */
function C() {
  return (
    <div className="grand">
      <h2>我是C组件</h2>
      <span>
        我从A组件接收到的名字叫：
        <Consumer>
          {(value) => {
            return `${value.name},年龄是${value.age}`;
          }}
        </Consumer>
      </span>
    </div>
  );
}
