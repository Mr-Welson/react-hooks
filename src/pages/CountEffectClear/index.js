import React,  { useState, useEffect } from 'react';
// 1. 不需要清除副作用的 effect 可以没有返回值
// 2. 如果 useEffect 返回一个函数，React 将会在组件卸载(更新)的时候调用它，用来清除副作用

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
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }
    // tip: 每次更新都会先取消订阅，然后重新订阅
    // 订阅事件
    EventEmitter.on('isOnlineChange', handleStatusChange);
    return function () {
      // 取消订阅
      EventEmitter.off('isOnlineChange', handleStatusChange);
    }  
  })

  const [id, setId] = useState(0);
  return (
    <div>
      <h2> Effect 清除 </h2>
      <button onClick={() => setId(id + 1)}> 点击观察控制台 </button>
      <p> { isOnline ? 'Online' : 'Offline' } </p>
    </div>
  )
}

export default CountDemo;