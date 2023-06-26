import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../index.css';
import carMercy from '../assets/Mercedes.png';
import holder from '../assets/holder.png'
import Rate from '../assets/Rate.png'
import Person from '../assets/img_photo.png'

const Testimonyy = ({}) =>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return(
        <Container>
            <br/><br/><br/><br/>
            <div className='text-center'>
                <h1>Testimonial</h1><br />
                <h5>Berbagai review positif dari para pelanggan kami</h5><br/><br/>
            </div>
            <div className='d-flex justify-content-center'>
                <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect} className='carousel-Custom'>
                    <Carousel.Item>
                        <img
                        className=""
                        src={holder}
                        alt="First slide"
                        />
                        <Carousel.Caption className='carousel-Caption text-start'>
                            <Col>
                                <img src={Person} alt="Profile Pic" />
                            </Col>
                            <Col>
                                <img src={Rate} alt="rating icon" />
                                <h6>“Mobilnya bagus, pelayanannya cepat, petugasnya ramah, harganya oke bagi saya, senang rasanya bisa menggunakan jasa Binar Car Rental”</h6>
                                <p>John Dee 32, Bromo</p>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className=""
                        src={holder}
                        alt="Second slide"
                        />
                        <Carousel.Caption className='carousel-Caption text-start'>
                            <Col>
                                <img src={Person} alt="Profile Pic" />
                            </Col>
                            <Col>
                                <img src={Rate} alt="rating icon" />
                                <h6>“Mobilnya bagus, pelayanannya cepat, petugasnya ramah, harganya oke bagi saya, senang rasanya bisa menggunakan jasa Binar Car Rental”</h6>
                                <p>John Dee 32, Bromo</p>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className=""
                        src={holder}
                        alt="Third slide"
                        />
                        <Carousel.Caption className='carousel-Caption text-start'>
                            <Col>
                                <img src={Person} alt="Profile Pic" />
                            </Col>
                            <Col>
                                <img src={Rate} alt="rating icon" />
                                <h6>“Mobilnya bagus, pelayanannya cepat, petugasnya ramah, harganya oke bagi saya, senang rasanya bisa menggunakan jasa Binar Car Rental”</h6>
                                <p>John Dee 32, Bromo</p>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br/><br/><br/>
        </Container>
        
    )
}

export default Testimonyy;