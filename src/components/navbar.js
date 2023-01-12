import { React, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaList, FaSearch } from 'react-icons/fa';
import { BsCart, BsCartFill, BsCartPlus } from 'react-icons/bs';

function NavbarComponent() {

    const [cartActive, setCartActive] = useState(false)

    const handleClick = (prop) => {
        console.log(`${prop} button clicked!`)
        if (prop == 'Cart') {
            setCartActive((prev) => !prev);
        }
    }
    

    return (
        <Container fluid className='navbar-container'>
            <Row>
                <Col xs={1} sm={1} md={1} lg={1}> 
                    <div className="icon-container"> 
                        <FaList onClick={() => handleClick('List')}/>
                    </div>

                </Col>

                <Col xs={7} sm={7} md={8} lg={9}> 
                    <h1> 
                        Mi pastillero
                    </h1>
                </Col>

                <Col xs={4} sm={4} md={3} lg={2}> 
                    <div className="ml-auto icon-container"> 
                        <FaSearch className="ml-auto navbar-icon-style" onClick={() => handleClick('Search')}/>  
                        {cartActive ? 
                            <BsCart className="navbar-icon-style" onClick={() => handleClick('Cart')}/>
                             : <BsCartFill className="navbar-icon-style" onClick={() => handleClick('Cart')} />}
                    </div>
                    
                </Col>
            </Row>
            
        </Container>
    )
}

export default NavbarComponent;