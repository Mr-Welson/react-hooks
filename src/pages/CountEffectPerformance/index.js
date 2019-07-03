import React,  { useState, useEffect } from 'react';
// 上例中，组件每次更新都会重新
// 1. useEffect 可以接收第二个参数(数组类型), 来控制 effect 的调用;
// 2. 如果传入一个空数组([]), 则 effect 只会在挂载和卸载时调用;
// 3. 请确保数组中包含了所有外部作用域中会随时间变化并且在 effect 中使用的变量，否则你的代码会引用到先前渲染中的旧变量
// 4. 仅当参数内的变量发生变化时，effect才会被调用;

const EventEmitter = {
  on(type, handler) {
    console.log('添加监听', type);
  },
  off(type, handler) {
    console.log('移除监听', type);
  }
}

const CountDemo = () => {
  console.log('=== render ===')

  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }
    // 订阅事件
    EventEmitter.on('isOnlineChange', handleStatusChange);
    return function () {
      // 取消订阅
      EventEmitter.off('isOnlineChange', handleStatusChange);
    }
    // 传入一个空数组，仅当挂载和卸载时执行
  }, []);

  const [id, setId] = useState(0);
  useEffect(() => {
    // 仅当 id 发生变化时执行
    console.log('isOnline, effect');
    setIsOnline(id < 1);
  }, [id])

  return (
    <div>
      <h2> Effect 性能优化 </h2>
      <button onClick={() => setId(getId(id))}> 点击观察控制台 </button>
      <p> { isOnline ? 'Online' : 'Offline' } </p>
    </div>
  )
}

const ids = [1,2]
function getId(id) {
  const number = Math.random();
  const idx = number > 0.5 ? 1 : 0;
  const newId = ids[idx];
  if(id !== newId) {
    console.log('id 更新', newId);
  }
  return newId;
}

export default CountDemo;