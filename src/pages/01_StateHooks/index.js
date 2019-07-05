import React, { useState } from 'react';
// 1. Hook 在 class 内部是不起作用的;
// 2. Hooks 在组件每次更新的时候都会被调用;
// 3. useState是一个函数，接受唯一参数(初始state), 返回一个数组result, result[0]为当前state, result[1]为更新state的函数;
// 4. useState 也可以接受一个函数, 返回一个初始state, 这个函数只在初始渲染时被调用;
// 5. 更新 state 变量总是替换它而不是合并它;
// 6. 如果前后两次的值相同, useState 不会更新


// function useState(initState) {
//   let currentState = initState;
//   let setState = function (newState) {
//      currentState = newState
//      return currentState
//   }
//   return [currentState, setState]
// }

const CountDemo = () => {
  
  const [count, setCount] = useState(0);
  // const [count, setCount] = useState(() => 0);
  return (
    <div className='container'>
      <h2> Counter with State Hooks </h2>
      <p> Count: { count } </p>
      <button onClick={() => setCount(count + 1)}>
        添加
      </button>
      <button onClick={() => setCount(c => c - 1)}>
         减少
      </button>
    </div>
  )
}

export default CountDemo;