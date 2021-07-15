import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import beastData from './data.json';
import SelectedBeast from './SelectedBeast';

// add a common
class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      title: '',
      image_url: '',
      description: '',
    };
  }
  clickOnBeast = () => {
    this.setState({
      title: this.title,
      image_url: this.image_url,
      description: this.description,
    });
  }

  
  
  render () {
    return (
      <>
        <Header />
        <Main beast={beastData} modalBeast={this.clickOnBeast} />
        <SelectedBeast
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description} />
        <Footer />
      </>
    );
  }
}

export default App;
