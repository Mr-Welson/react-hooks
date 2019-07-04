import React from 'react';
// 1. 会在所有的 DOM 变更之后同步调用 effect
// 2. 浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新

const Container = () => {
  return (
    <div className='container'>
      <h2> LayoutEffect Hooks </h2>
      <p> 待完善 </p>
    </div>
  )
}

export default Container;