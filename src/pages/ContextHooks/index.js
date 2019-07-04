import React, { useState, useContext } from 'react';
// 1. useContext 接收一个context 对象（React.createContext 的返回值）并返回该 context 的当前值;
// 2. useContext 相当于 <MyContext.Consumer>
// 3. 当组件上层最近的 <MyContext.Provider> 更新时, 该 Hook 会触发重渲染
// 4. 如果重渲染组件的开销较大，可以使用 useMemo 来优化（见后续）

const CountContext = React.createContext({
  theme: 'red',
  changeTheme: () => {}
})

const Container = () => {
  return (
    <div className='container'>
      <h2> Context Hooks </h2>
      <Parent>
        <Children />
      </Parent>
    </div>
  )
}

const Parent = ({ children }) => {
  const [theme, setTheme] = useState('red');
  return (
    <CountContext.Provider value={{theme, setTheme}}>
      { children }
    </CountContext.Provider>
  )
}

const Children = () => {
  const { setTheme } = useContext(CountContext);
  const theme = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`
  return (
    <div>
      <button onClick={() => setTheme(theme)}> 切换背景色 </button>
      <GrandChildren />
    </div>
  )
}

const GrandChildren = () => {
  const { theme } = useContext(CountContext);
  return (
    <div style={{width: '100px', height: '100px', background: theme}}>
      context
    </div>
  )
}

const getRandomColor = () => {
  return parseInt(Math.random()*255);
}

export default Container;