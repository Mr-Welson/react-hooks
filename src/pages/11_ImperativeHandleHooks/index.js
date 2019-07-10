import React, { useState, useRef, useImperativeHandle } from 'react';
// 1. 透传 Ref

const Container = () => {
  const [text, updateText] = useState('default value');
  const inputRef = useRef();
  const handleClick = () => {
    console.log(inputRef.current.value);
    updateText(inputRef.current.value)
    inputRef.current.value = ''
  }

  return (
    <div className='container'>
      <h2> ImperativeHandle Hooks 透传 Ref </h2>
      <p>{text}</p>
      <Child ref={inputRef} />
      <button onClick={handleClick}> 按钮 </button>
    </div>
  )
}

const Child = React.forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  return (
    <input type="text" ref={inputRef} placeholder='请输入' {...props} />
  );
}) 


export default Container;