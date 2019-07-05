import React from 'react';

class CountDemo extends React.Component {
  state = {
    count: 0
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
      <p> Count: { count } </p>
      <button onClick={() => this.setCount(count + 1)}>
        点击
      </button>
    </div>
    )
  }
}

export default CountDemo;