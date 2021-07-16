import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component{


  render () {
    return (
      <div className="main">
        {this.props.allBeast.map((item, idx) => (
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
