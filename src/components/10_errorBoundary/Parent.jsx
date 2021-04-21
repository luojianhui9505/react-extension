import React, { Component } from "react";
import C from "./Child";
export default class Parent extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显示 UI
    return { hasError: true };
  }
  render() {
    return (
      <div>
        <h2>我的父组件</h2>
        {this.state.hasError?<h2>有错误</h2>:<C />}
      </div>
    );
  }
}
