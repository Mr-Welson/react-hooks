import React from 'react';

class CountDemo extends React.Component {
  state = {
    isOnline: null
  }

  componentDidMount() {
    Event.on('isOnlineChange', this.handleStatusChange);
  }

  componentWillUnmount() {
    Event.off('isOnlineChange', this.handleStatusChange);
  }

  handleStatusChange = (status) => {
    this.setState({ 
      isOnline: status.isOnline
    })
  }

  render() {
    const { isOnline } = this.state;
    if(isOnline === null) {
      return 'Loadin...'
    }
    return isOnline ? 'Online' : 'Offline'
  }
}

export default CountDemo;