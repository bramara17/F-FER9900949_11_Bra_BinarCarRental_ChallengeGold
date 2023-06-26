import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import carMercy from '../assets/Mercedes.png';
import Searchh from "../components/search"



const Bannerr = ({}) =>{
    const [isVisible, setIsVisible] = useState(false);
    return(
        <div className='bannerColor'>
            <Container>
                <Row>
                    <Col>
                        <div className='bannerLeft'>
                            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            <button onClick={() => setIsVisible(!isVisible)}>Mulai Sewa Mobil</button>
                            
                        </div>
                    </Col>
                    <Col>
                        <div className='bannerRight' >
                            <img src={carMercy} alt="Car Pic"/>
                        </div>
                    </Col>
                </Row>
            </Container>
            {isVisible ? <Searchh /> : null}
        </div>
    )
}

export default Bannerr;