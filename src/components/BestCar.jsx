import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../index.css';
import ourService from '../assets/our_service.png';
import icon from '../assets/checkIcon.png';



const BestCarr = ({checklist}) =>{
    return(
        // console.log("iniiii ",checklist)
        <Container className='ourService'>
            <Row>
                <Col>
                    <div>
                        <img src={ourService} alt="" />
                    </div>
                </Col>
                <Col>
                    <div className='ourService2'>
                        <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                            {checklist.map((item) => (
                                <div className='checklist'>
                                    <img src={icon} alt=""/>
                                    <p>{item}</p>
                                </div>
                            ))};
                    </div>
                </Col>
            </Row>
        </Container>
    )
    
}

export default BestCarr;