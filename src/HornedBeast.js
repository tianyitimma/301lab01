import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeast extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  click = () => {
    this.setState({likes: this.state.likes + 1});
  }

  render () {
    return (
      <Card style={{ width: '28rem' }}>
        <Card.Img variant="top" src={this.props.image_url} onClick={this.click} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
            <br />
            Current likes: {this.state.likes}
          </Card.Text>
          
        </Card.Body>
      </Card>

    // <div className={this.props.title}>
    //   <h2>
    //     {this.props.title}
    //   </h2>
    //   <Image id={this.props.title} src={this.props.image_url} alt={this.props.description} title={this.props.title} onClick={this.click} fluid />
    //   <p>
    //     {this.props.description}
    //   </p>
    //   <span>
    //     Current likes: {this.state.likes}
    //   </span>
    // </div>
      
    );
  }
}

export default HornedBeast;
