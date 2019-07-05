import React from 'react';

const CountContext = React.createContext();

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

class Parent extends React.Component {
  state={
    theme: 'red'
  }
  setTheme = (theme) => {
    this.setState({
      theme
    })
  }
  render () {
    const { theme } = this.state;
    return (
      <CountContext.Provider value={{theme, setTheme: this.setTheme}}>
        { this.props.children }
      </CountContext.Provider>
    )
  }
}

const Children = () => {
  const theme = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`
  return (
    <div>
      <CountContext.Consumer>
        {({setTheme}) => (
          <button onClick={() => setTheme(theme)}> 
            切换背景色 
          </button>
        )}
      </CountContext.Consumer>
      <GrandChildren />
    </div>
  )
}

const GrandChildren = () => {
  return (
    <CountContext.Consumer>
      {({theme}) => (
        <div style={{width: '100px', height: '100px', background: theme}}>
          context
        </div>
      )}
    </CountContext.Consumer>
  )
}

const getRandomColor = () => {
  return parseInt(Math.random()*255);
}

export default Container;