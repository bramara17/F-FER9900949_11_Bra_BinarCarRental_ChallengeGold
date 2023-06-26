import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
import iconFB from '../assets/icon_facebook.png';
import iconIG from '../assets/icon_instagram.png';
import iconTW from '../assets/icon_twitter.png';
import iconMail from '../assets/icon_mail.png';
import iconTwitch from '../assets/icon_twitch.png';


const Footer = ({ menu }) => {
    const icons = [
        iconFB,iconIG,iconTW,iconMail,iconTwitch
      ];
    return (
        <div className="footer">
            <br /><br /><br />
            <Container>
                <Row>
                    <Col sm="4">
                        <b><p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p></b>
                        <b><p>binarcarrental@gmail.com</p></b>
                        <b><p>081-233-334-808</p></b>
                    </Col>
                    <Col sm="2">
                        {menu.map((item) => (
                            <a className='footer-menu' href="/">{item}</a>
                        ))}
                        
                    </Col>
                    <Col sm="4" className="iconS">
                        <b><p>Connect with us</p></b>
                        {icons.map((item) => (
                            <img className='iconSocmed' src={item} alt="Icon Social Media" />
                        ))}
                        
                    </Col>
                    <Col sm="2">
                        <b><p>Copyright Binar 2022</p></b>
                        <p className='logoNavbar'></p>
                    </Col>
                </Row>
                
            </Container>
        </div>
      
   );
};

export default Footer;