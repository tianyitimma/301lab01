import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component{

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     beastsByHornNum: this.props.allBeast.filter(beast => beast.horns === this.props.horns),
  //   };
  // }

  render () {
    return (
      <div className="main">
        {this.props.allBeast.filter(beast => beast.horns === this.props.horns).map((item, idx) => (
          <HornedBeast
            key={idx}
            title={item.title}
            image_url={item.image_url}
            description={item.description}
            turnOnModal={this.props.turnOnModal}
          />
        ))}
      </div>
    );
  }
}

export default Main;
