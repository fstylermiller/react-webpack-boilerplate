import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import Main from './Main';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Match pattern='/' exactly render={() =>
            <Main></Main>
          } />
        </div>
      </BrowserRouter>
    )
  }
}
