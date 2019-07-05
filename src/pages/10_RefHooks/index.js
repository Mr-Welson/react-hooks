import React, { useState, useRef } from 'react';
// 1. useRef 跟 createRef 类似, 可以用来生成对 DOM 对象的引用

const Container = () => {
  const inputRef = useRef();
  const [text, updateText] = useState('default');
  const handleClick = () => {
    console.log(inputRef, 111);
    updateText(inputRef.current.value)
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