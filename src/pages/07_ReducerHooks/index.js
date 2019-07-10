import React, { useReducer } from 'react';
// 1. useReducer 和 useState 很类似
//  1.1 当 state 比较复杂时，推荐使用 useReducer
//  1.2 useState 更新数据时是异步的, useReducer 是同步更新(观察按钮 【添加2次】的效果), 
// 2. useReducer 跟 redux/react-redux 几乎一模一样，但无法使用redux的中间件
// 3. useReducer接收3个参数，
//  const [state, dispatch] = useReducer(reducer, initialArg, init);
//  第一个参数为形如 (state, action) => newState 的 reducer，并返回新的 state 及配套的 dispatch 方法
//  第二个参数为 初始state
//  第三个参数为可选值, 当 init 存在时, 则第二个参数为 init 方法的参数
// 如果前后两次的值相同, useReducer 不会更新

const countReducer = (state, action) => {
  console.log('countReducer 执行');
  switch(action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}

const initCount = (initialCount) => {
  return initialCount
}
const Container = ({ initialCount = 0}) => {
  // const [count, countDispatch] = useReducer(countReducer, 0);
  console.log('== render 11 ==')
  const [count, countDispatch] = useReducer(countReducer, initialCount, initCount);
  console.log('== render 22 ==')
  return (
    <div className='container'>
      <h2> Reducer Hooks </h2>
      <p>{ count }</p>
      <button onClick={() => countDispatch({ type: 'add' })}> 添加 </button>
      <button onClick={() => countDispatch({ type: 'minus' })}> 减少 </button>
      <button onClick={
        () => {
          countDispatch({ type: 'add' })
          countDispatch({ type: 'add' })
        }
      }> 添加2次 </button>
    </div>
  )
}

export default Container;