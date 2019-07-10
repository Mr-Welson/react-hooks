import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
// useLayoutEffect(() => { doSomething });
// 1. 在所有 DOM 更新完成后触发, 可以用来执行一些与布局相关的副作用，比如获取 DOM 元素宽高，窗口滚动距离等等。
// 2. 浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新
// 3. 与 DOM 无关的副作用操作请使用 useEffect

const Container = () => {
  const divRef = useRef();
  const [width, setWidth] = useState(100)

  useEffect(() => {
    console.log('DOM 更新后 useEffect 异步调用');
    console.log('width === ', width);
  }, [width])

  useLayoutEffect(() => {
    console.log('DOM 更新后 useLayoutEffect 同步调用');
    console.log('width === ', width);
    console.log('offsetWidth === ', divRef.current.offsetWidth) // 包含 border + padding
    console.log('clientWidth === ', divRef.current.clientWidth) // 只包含 padding
  })

  return (
    <div className='container'>
      <h2> LayoutEffect Hooks </h2>
      <div 
        ref={divRef}
        style={{width, background: '#eee', margin: 10, padding: 20, border: '5px solid #ddd'}}
      >
        content
      </div>
      <button onClick={() => {
        setWidth(width + 50);
      }}> 增加宽度 </button>
    </div>
  )
}

export default Container;