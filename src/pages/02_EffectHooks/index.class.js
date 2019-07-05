import React from 'react';

class CountDemo extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    this.updateDocumentTitle();
  }
  componentDidUpdate() {
    this.updateDocumentTitle();
  }

  updateDocumentTitle = () => {
    console.log(`点击${this.state.count}次`)
  }

  setCount = (count) => {
    this.setState({
      count
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div className='container'>
      <h2> Counter </h2>
      <p> 点击了 { count } 次</p>
      <button onClick={() => this.setCount(count + 1)}>
        点击
      </button>
    </div>
    )
  }
}

export default CountDemo;