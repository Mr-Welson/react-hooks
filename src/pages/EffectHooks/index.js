import React, { useState, useEffect } from 'react';
// 1. Effect Hook 可以让你在函数组件中执行副作用操作
// 2. 副作用: 数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用;
// 3. useEffect Hook 可以看做是 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合;
// 4. 组件更新后需要执行的操作(componentDidMount，componentDidUpdate)可以放在 effect 里;
// 5. 在浏览器完成布局与绘制之后，传给 useEffect 的函数会延迟调用, 因此不应在 effect 函数中执行阻塞浏览器更新屏幕的操作

const CountDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`点击${count}次`)
  })

  return (
    <div className='container'>
      <h2> Counter with Effect Hooks </h2>
      <p> 点击了 { count } 次</p>
      <button onClick={() => setCount(count + 1)}>
        点击观察控制台
      </button>
    </div>
  )
}

export default CountDemo;