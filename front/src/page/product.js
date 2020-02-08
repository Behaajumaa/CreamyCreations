import React from 'react';
import './product.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Dropdown,MenuItem,Button,ButtonToolbar,DropdownButton,SplitButton ,Container,Row,Col,FormControl,Nav,thumbnail,Table,Image} from 'react-bootstrap';




class product extends React.Component {
  


  render() {
    
    return (
        <>
        <Button className='add' size="lg" variant="danger">Add new product</Button> 
        <Container>
        
  <Row className="row">
    <Col calssName="col" sm={2}>
        <img
    width={170}
    height={170}
    className="mr-3 img_product"
    src={require("../Image/image.jpg")}
        alt="Generic placeholder"
        
  />
  </Col>
    <Col  className="col" sm={8}>
  <p  ><span>Name:</span> cake</p>
    <p><span>Description:</span> bla blaswevewvwvwv</p>
    <p><span>Price:</span> 10 $</p>
    <p className="drop"> <span>Categories:</span> 
 <DropdownButton id="dropdown-basic-button"  size="sm"   variant="secondary" title="Categories">
				<Dropdown.Item >Action</Dropdown.Item>
				<Dropdown.Item>Another action</Dropdown.Item>
				<Dropdown.Item>Something else</Dropdown.Item>
			</DropdownButton> </p>
    </Col>
    <Col  className="col"sm>
      <div className="icon">
        <div className="lid" />
        <div className="lidcap" />
        <div className="bin" />
      </div>      <svg className="icon-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 40" width={40} height={40}>
        <path className="trash-lid" fillRule="evenodd" d="M6 15l4 0 0-3 8 0 0 3 4 0 0 2 -16 0zM12 14l4 0 0 1 -4 0z" />
        <path className="trash-can" d="M8 17h2v9h8v-9h2v9a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
      </svg>
      
      <img
    width={170}
    height={170}
    className="mr-3 imgUpdate"
    src={require("../Image/1.png")}
        alt="Generic placeholder"
        
  />
      
      </Col>
  </Row>
  <Row className="row">
    <Col calssName="col" sm={2}>
        <img
    width={170}
    height={170}
    className="mr-3 img_product"
    src={require("../Image/image.jpg")}
        alt="Generic placeholder"
        
  />
  </Col>
    <Col  className="col" sm={8}>
  <p  ><span>Name:</span> cake</p>
    <p><span>Description:</span> bla blaswevewvwvwv</p>
    <p><span>Price:</span> 10 $</p>
    <p className="drop"> <span>Categories:</span> 
 <DropdownButton id="dropdown-basic-button"  size="sm"   variant="secondary" title="Categories">
				<Dropdown.Item >Action</Dropdown.Item>
				<Dropdown.Item>Another action</Dropdown.Item>
				<Dropdown.Item>Something else</Dropdown.Item>
			</DropdownButton> </p>
    </Col>
    <Col  className="col"sm>
      <div className="icon">
        <div className="lid" />
        <div className="lidcap" />
        <div className="bin" />
      </div>      <svg className="icon-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 40" width={40} height={40}>
        <path className="trash-lid" fillRule="evenodd" d="M6 15l4 0 0-3 8 0 0 3 4 0 0 2 -16 0zM12 14l4 0 0 1 -4 0z" />
        <path className="trash-can" d="M8 17h2v9h8v-9h2v9a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
      </svg>
      
      <img
    width={170}
    height={170}
    className="mr-3 imgUpdate"
    src={require("../Image/1.png")}
        alt="Generic placeholder"
        
  />
      
      </Col>
  </Row><Row className="row">
    <Col calssName="col" sm={2}>
        <img
    width={170}
    height={170}
    className="mr-3 img_product"
    src={require("../Image/image.jpg")}
        alt="Generic placeholder"
        
  />
  </Col>
    <Col  className="col" sm={8}>
  <p  ><span>Name:</span> cake</p>
    <p><span>Description:</span> bla blaswevewvwvwv</p>
    <p><span>Price:</span> 10 $</p>
    <p className="drop"> <span>Categories:</span> 
 <DropdownButton id="dropdown-basic-button"  size="sm"   variant="secondary" title="Categories">
				<Dropdown.Item >Action</Dropdown.Item>
				<Dropdown.Item>Another action</Dropdown.Item>
				<Dropdown.Item>Something else</Dropdown.Item>
			</DropdownButton> </p>
    </Col>
    <Col  className="col"sm>
      <div className="icon">
        <div className="lid" />
        <div className="lidcap" />
        <div className="bin" />
      </div>      <svg className="icon-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 40" width={40} height={40}>
        <path className="trash-lid" fillRule="evenodd" d="M6 15l4 0 0-3 8 0 0 3 4 0 0 2 -16 0zM12 14l4 0 0 1 -4 0z" />
        <path className="trash-can" d="M8 17h2v9h8v-9h2v9a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
      </svg>
      
      <img
    width={170}
    height={170}
    className="mr-3 imgUpdate"
    src={require("../Image/1.png")}
        alt="Generic placeholder"
        
  />
      
      </Col>
  </Row>
  </Container>
      </>
    );
  }
}

export default product;