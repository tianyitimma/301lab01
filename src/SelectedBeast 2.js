import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {

  render() {
    return(

      <Modal show={this.props.turnOnModal} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.modalBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: '28rem' }} id={this.props.modalBeast.title} >
            <Card.Img variant="top" src={this.props.modalBeast.image_url} />
            <Card.Body>
              <Card.Title>{this.props.modalBeast.title}</Card.Title>
              <Card.Text>
                {this.props.modalBeast.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    );
  }
}




export default SelectedBeast;
