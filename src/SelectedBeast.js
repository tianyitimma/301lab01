import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectedBeast extends React.Component {


  render(){
    return(
  
      <>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={this.props.image_url} alt={this.props.description} />
            <p>{this.props.description}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Add to your favorite</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </>
    

    );
  }
}




export default SelectedBeast;


