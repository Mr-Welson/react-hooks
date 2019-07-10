import React, { useState, useMemo } from 'react';
// useCallback(fn, inputs) === useMemo(() => fn, inputs)
// useMemo 和 useCallback 功能类似, 只是用法稍有区别
// 从上述用法可以看到, useCallback不会执行第一个参数，而 useMemo 会执行第一个参数并返回执行结果
// 所以 useCallback 常用来记忆事件函数, 生成 memoizedFn 传递给子组件
// useMemo 常用来记忆组件 

const Container = () => {
  const [text, updateText] = useState('');
  const memoChild = useMemo(() => {
    console.log('useMemo 执行');
    const content = `content: ${text}`
    return <Child content={content} />
  }, [text]);

  const [count, setCount] = useState(1);

  return (
    <div className='container'>
      <h2> Memo Hooks (记忆组件) </h2>
      <p>
        点击按钮不会更新 content 组件
        <button
          onClick={() => setCount(count+1)}
        > 点击 { count } 次 </button>
      </p>
      <input 
        value={text}
        placeholder='请输入并观察控制台'
        onChange={(e) => updateText(e.target.value)}
      /> 
      { memoChild }
    </div>
  )
}

const Child = ({ content }) => {
  console.log('content render');
  return (
    <div>
      { content }
    </div>
  )
}

export default Container;