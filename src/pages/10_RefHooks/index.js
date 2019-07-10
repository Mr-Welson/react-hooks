import React, { useState, useRef } from 'react';
// const refContainer = useRef(initialValue);
// 1. useRef 返回一个可变的 ref 对象, 其 .current 属性被初始化为传递的参数（initialValue）。返回的对象将存留在整个组件的生命周期中。
// 2. useRef() 不仅适用于 DOM 引用, 其 current 属性是可变的，可以保存任何值
// 3. useRef().current 改变时不会导致重新渲染


const Container = () => {
  const inputRef = useRef();
  const [text, updateText] = useState('default');
  const handleClick = () => {
    console.log(inputRef);
    updateText(inputRef.current.value)
    inputRef.current.value = ''
  }
  return (
    <div className='container'>
      <h2> Ref Hooks </h2>
      <p>{text}</p>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        按钮
      </button>
    </div>
  )
}

export default Container;