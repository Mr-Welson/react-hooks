import React from 'react';
// 如下例子(仔细对比 Child 和 PureChild 组件的 render 执行)
// input 每次输入时都会触发父组件 render, 
// 所有的子组件都没有用到状态 text, 这种情况下我们希望子组件不要更新
// 1. 子组件如果使用了内联变量和方法, 父组件每次 render 都会产生一个新的style对象和 onClick 方法, 子组件必然会更新。
// 2. 优化方法：把内联变量或方法都抽离成变量
// 3. PureChild_1 和 Child_1 使用了内联变量和方法必然更新
// 4. Child_2 虽然把参数抽离成了变量，但纯函数没有属性对比功能，所以也会 render
// 5. PureChild_2 继承了 React.PureComponent, 可以对比前后的属性来决定组件是否需要更新, 因为 PureChild_2 的依赖项都没有发生变化，所以只有 PureChild_2 不会再次render。

// Q: hooks 都是函数式组件, 该如何实现 React.PureComponent 的功效呢 ？
// A: 使用 useCallback + React.memo

const childStyle = { fontSize: 16 };
class Container extends React.Component {
  state = {
    text: ''
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  } 

  handleClick = () => {
    console.log('btn clicked')
  }
  render() {
    return (
      <div className='container'>
        <h2> Callback Hooks </h2>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder='请输入以触发更新'
        />
        <Child 
          title={'按钮一'}
          style={{fontSize: 16}}
          onClick={() => console.log('btn clicked')}
        />
         <Child 
          title={'按钮二'}
          style={childStyle}
          onClick={this.handleClick}
        />
        <PureChild 
          title={'pure 按钮一'}
          style={{fontSize: 16}}
          onClick={() => console.log('btn clicked')}
        />
        <PureChild 
          title={'pure 按钮二'}
          style={childStyle}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

const Child = ({ title, style, onClick }) => {
  console.log(title, 'render');
  return (
    <div style={style}>
      <button onClick={onClick}> {title} </button>
    </div>
  )
}

class PureChild extends React.PureComponent {
  render() {
    const { title, style, onClick } = this.props;
    console.log(title, 'render');
    return (
      <div style={style}>
        <button onClick={onClick}> {title} </button>
      </div>
    )
  }
}

export default Container;