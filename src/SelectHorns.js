import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';



class SelectHorns extends React.Component{

  select = e => {
    this.props.selectHorns(parseInt(e.target.value));
    console.log(e.target.value, typeof parseInt(e.target.value));
  }

  render() {
    return (
      
      <Form>
        <Form.Label
          className="me-sm-2"
          htmlFor="inlineFormCustomSelect"
        >
          This is my Form: Select the number of horns
        </Form.Label>
        {/* <Form.Select className="me-sm-2" id="inlineFormCustomSelect" onChange={this.select}>
          <option value="0">Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select> */}
        <Form.Control id="inlineFormInputName" placeholder="enter 1-3, or 100" onChange={this.select} />
        

      </Form>
      
    );
  }
}



export default SelectHorns;

