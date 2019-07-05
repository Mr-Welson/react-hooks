import React, { useState, useCallback } from 'react';
// 建议先看 index.class.js, 可以更清楚的理解 useCallback 的功能
// 1. useCallback 返回一个记忆后的函数
// 2. 同样通过第二个参数可以控制 useCallback 的参数执行时机
// 3. useCallback 和 PureComponent 或 React.memo 结合使用可以避免不必要的 VDOM 渲染
// 4. useCallback 和 useMemo 的区别在 MemoHooks 中介绍
// useCallback(fn, inputs) === useMemo(() => fn, inputs))


// React.memo:
// 1. 也是一个高阶组件, 用于函数式组件
// 2. 默认情况下只会对 props 对象进行浅比较(因此在使用React.memo时会潜藏一些bug)
// 3. 如果想要控制 prevProps 和 nextProps 的深层对比，可以传入一个比对方法作为第二个参数 React.memo(SomeComponent, CompareFn)

const childStyle={fontSize: 16};
let count = 0;

const Container = () => {
  const [text, updateText] = useState('');
  const [title, setTitle] = useState('memo按钮');

  const memorizedClick = useCallback(() => {
    console.log('btn clicked')
    count++;
    setTitle(`点击 ${count} 次`);
  },[]);
  
  return (
    <div className='container'>
      <h2> Callback Hooks (记忆函数) </h2>
      <input
        type="text"
        value={text}
        onChange={(e) => updateText(e.target.value)}
        placeholder='请输入并观察控制台'
      />
      <Child 
        title='普通按钮'
        style={childStyle}
        onClick={memorizedClick}
      />
      <MemoChild 
        style={childStyle}
        title={title}
        onClick={memorizedClick}
      />
    </div>
  )
}

// 父组件 render 时，Child 组件必然 render
const Child = ({ title, style, onClick }) => {
  console.log(title, 're-render');
  return (
    <div style={style}>
      <button onClick={onClick}> {title} </button>
    </div>
  )
}

// 使用 React.memo 缓存 Child 组件，仅当 Child 接收的属性的值发生变化时，才会触发 Child 的 render
const MemoChild = React.memo(Child)
// const MemoChild = React.memo(Child, (prevProps, nextProps) => {
//   return prevProps.obj.title === nextProps.obj.title
// })

export default Container;