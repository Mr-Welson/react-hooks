import React, { useState } from 'react';
// 自定义 Hooks: 
// 1. 自定义 Hook 必须使用 use 开头
// 2. 自定义 Hook 内部可以调用其他的 Hook
// 3. 自定义 Hook 本质上就是一个普通函数


const useNumber = (initNumber) => {
  const [number, setNumber] = useState(initNumber);
  return [number, setNumber]
}

const Container = () => {

  const [number, setNumber] = useNumber(1);

  return (
    <div className='container'>
      <h2> 自定义 Hooks </h2>
      <p> { number } </p>
      <button onClick={() => setNumber(Math.random())}> Change Number </button>
    </div>
  )
}

export default Container;