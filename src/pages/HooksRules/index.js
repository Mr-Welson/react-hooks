import React, { useState, useEffect } from 'react';
// 1. 只在最顶层使用 Hook
//  1.1 不要再循环、条件、嵌套函数中使用 hooks, 
//  2.1 确保 Hook 在每一次渲染中都按照同样的顺序被调用
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
  
  const [count, setCount] = useState(2);
  useEffect(() => {
    console.log(count)
  })

  const [status, setStatus] = useState(true);
  useEffect(() => {
    setStatus(count % 2 === 0 ? true : false)
  }, [count])

  return (
    <div className='container'>
      <h2> Hook 规则 </h2>
      <button onClick={() => setCount(parseInt(Math.random()*100))}>
        随机数：{ count }
      </button>
      <p>
        { status ? '偶数' : '奇数'}
      </p>
    </div>
  )
}

export default CountDemo;