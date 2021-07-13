import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';

// add a common
class App extends React.Component{
  render () {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
