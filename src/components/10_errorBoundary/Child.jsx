import React, { Component } from "react";

export default class Child extends Component {
  state = {
    users: [
      {
        id: "001",
        name: "jei",
        age: 13,
      },
      {
        id: "002",
        name: "jsoo",
        age: 14,
      },
      {
        id: "003",
        name: "jhiofdh",
        age: 10,
      },
    ],
    // users:'abc'
  };
  render() {
    return (
      <div>
        <h2>我是子组件</h2>
        {this.state.users.map((userObj) => {
          return (
            <h2 key={userObj.id}>
              {userObj.name}----{userObj.age}
            </h2>
          );
        })}
      </div>
    );
  }
}
