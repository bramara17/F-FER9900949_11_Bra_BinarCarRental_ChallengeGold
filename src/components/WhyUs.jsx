import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../index.css';
import icon1 from '../assets/icon_1.png';
import icon2 from '../assets/icon_2.png';
import icon3 from '../assets/icon_3.png';
import icon4 from '../assets/icon_4.png';



const Whyuss = ({object}) =>{
    const icons = [
        icon1,
        icon2,
        icon3,
        icon4,
      ];
    return(
        // console.log("iniiii ",checklist)
        <Container className='ourService'>
            <Row>
                <Col>
                    <div>
                        <h1>Why Us?</h1><br />
                        <p><b>Mengapa harus pilih Binar Car Retal?</b></p>
                    </div>
                </Col>
            </Row>
            <Row >
                <Col className='whyBox'>
                    {object.map ((item) => (
                    <div>
                        <img src= {icons[item.num]} alt="" />
                        <h3>{item.title}</h3>
                        <h5>{item.description}</h5>
                    </div>
                    ))}  
                </Col>
                
            </Row>
        </Container>
    )
    
}

export default Whyuss;