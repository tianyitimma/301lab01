import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import beastData from './data.json';
import SelectedBeast from './SelectedBeast';
import SelectHorns from './SelectHorns';

// add a common
class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      beast: beastData,
      showModal: false,
      selected: {},
      horns: 0,
    };
  }
  // turn on the modal function
  turnOnModal= (name) => {
    const selected = beastData.find(beast => beast.title === name);
    this.setState({
      showModal: true,
      selected: selected,
    });
  }

  // turn off the modal
  closeModal = () => {
    this.setState({showModal: false});
  }

  // update the number of horns from form
  horns = (n) => {
    this.setState({
      horns: n,
    });
    console.log('selected horns ', this.state.horns);
  }


  render () {
    return (
      <>
        <Header />
        <SelectHorns selectHorns={this.horns} />
        <Main
          allBeast={this.state.beast}
          turnOnModal={this.turnOnModal}
          horns={this.state.horns}
        />
        <SelectedBeast
          modalBeast={this.state.selected}
          turnOnModal={this.state.showModal}
          closeModal={this.closeModal}
        />
        <Footer />
      </>
    );
  }
}

export default App;
