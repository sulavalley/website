import React, { Component } from 'react';
import 'semantic-ui/dist/semantic.min.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
