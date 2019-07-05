import React, { useState, useEffect } from 'react';
// 1. 只在最顶层使用 Hook
//  1.1 不要再循环、条件、嵌套函数中使用 hooks 
//  1.2 确保 Hook 在每一次渲染中都按照同样的顺序被调用
//      hooks 内部使用数组形式记录 useState 申明的state变量, re-render 时, 如果 useState（或其他的hooks） 的执行顺序发生了变化，则会导致数组索引无法匹配，产生bug，因此必须保证 hooks 的执行顺序完全一致。
// 2. 只在 React 函数中调用 Hook
//  2.1 在 React 的函数组件中调用 Hook
//  2.2 在自定义 Hook 中调用其他 Hook 
// 3. 使用 eslint 来强制执行上述 2 条规则
//  3.1 npm install eslint-plugin-react-hooks --save-dev
//  3.2 你的 ESLint 配置
        // {
        //   "plugins": [
        //     // ...
        //     "react-hooks"
        //   ],
        //   "rules": {
        //     // ...
        //     "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        //     "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
        //   }
        // }


const CountDemo = () => {
  
  const [count, setCount] = useState(1);
  // 正确
  useEffect(() => {
    if( count % 2 === 0) {
      console.log(count + '为偶数')
    }
  })
  // 错误: 不能再条件里使用 useEffect
  // if( count % 2 === 0) {
  //   useEffect(() => {
  //     console.log(count + '为偶数')
  //   })
  // }

  const [countTwo, setCountTwo] = useState(1);
  useEffect(() => {
    console.log(countTwo)
  })

  return (
    <div className='container'>
      <h2> Hook 规则 </h2>
      <button onClick={() => setCount(parseInt(Math.random()*100))}>
        随机数：{ count }
      </button>
      <button onClick={() => setCountTwo(parseInt(Math.random()*10))}>
        随机数：{ countTwo }
      </button>
    </div>
  )
}

export default CountDemo;