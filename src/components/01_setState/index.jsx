import React, { Component } from "react";

export default class Demo extends Component {
  state = {
    count: 0,
  };
  /* setState对象式 */
  /* add = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 }, () => {
      console.log(this.state.count);
    });
  }; */
  //   setState函数式
  add = () => {
    this.setState(
      (state, props) => {
        console.log(props);
        return { count: state.count + 1 };
      },
      () => {
        console.log(this.state.count);
      }
    );
  };
  render() {
    return (
      <div>
        <h2>当前结果为：{this.state.count}</h2>
        <button onClick={this.add}>点击+1</button>
      </div>
    );
  }
}
