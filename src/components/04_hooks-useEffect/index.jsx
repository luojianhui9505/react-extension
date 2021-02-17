import React from "react";
import ReactDOM from "react-dom";
// 类式组件
/* class Demo extends Component {
     state={
         count:0
     }
     add=()=>{
         this.setState((state)=>{
                return {count:state.count+1}
         })
     }
    render() {
        return (
            <div>
                <h2>当前求和为:{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
} */
// 函数式组件
function Demo() {
  const [count, setCount] = React.useState(0);
  //相当于三个生命周期钩子：componentDidMount,componentWillUnmount,componentDidUpdate
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []); //传入空数组代表不监听任何值的变化，相当于componentDidMount的作用，如果不传则监听所有值的变化，如果想监听某一个属性就将该属性放入数组中即可，就相当于componentDidUpdate

  function add() {
    /* setCount(count+1);//第一种写法 */
    setCount((count) => count + 1); //第二种写法
  }
  function onMount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }
  return (
    <div>
      <h2>当前求和为:{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={onMount}>卸载组件</button>
    </div>
  );
}
export default Demo;
