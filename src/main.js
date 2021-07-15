import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

  render () {
    return (
      <div className="main">
        {this.props.beast.map(item =>
          <HornedBeast
            id={item.index}
            title={item.title}
            image_url={item.image_url}
            description={item.description}

          />
        )}
      </div>
    );
  }
}

export default Main;
