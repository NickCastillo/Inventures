import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListElement(props) {
    
    const handleClick = (prop) => {
        console.log(`${prop} button clicked!`)
    }
    
    const formatPrice = (price) => {
        return price.toLocaleString("de-DE");
    }

    return (
        <Row className='list-element'> 
            <Col xs={3} lg={2} className='img-container'>
                <img src={props.img} alt="medicine" />
            </Col>

            <Col xs={7} lg={8}>
                <Row className='maintext'> {props.name} </Row>
                <Row className='subtext'> {props.concentration}</Row>
                <Row className='subtext blue'> ${formatPrice(props.price)}</Row>
            </Col> 

            <Col xs={2} lg={2}>
                <div className="icon-container cart-icon"> 
                    <BsCartPlusFill onClick={() => handleClick(props.name)}/>  
                </div>
            </Col>

        </Row>
    )
}

export default ListElement;