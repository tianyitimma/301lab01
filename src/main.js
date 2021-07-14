import React from 'react';
import HornedBeast from './HornedBeast';
import {beastData} from './data';

class Main extends React.Component{
  render () {
    return (
      <div className="main">
        {beastData.map(item =>
          <HornedBeast title={item.title} image_url={item.image_url} description={item.description} />
        )}
      </div>
    );
  }
}

export default Main;
