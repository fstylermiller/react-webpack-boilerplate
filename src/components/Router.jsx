import React, { Component } from 'react';
import { Match, Miss } from 'react-router';
import Main from './Main';

class Router extends Component {
  render() {
    return (
      <div>
        <Match pattern="/" exactly component={Main} />
      </div>
    )
  }
}

export default Router;
