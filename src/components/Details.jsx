import Container from 'react-bootstrap/Container';
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import axios from "axios";
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import CardHeader from 'react-bootstrap/esm/CardHeader';


const Detailss = ({}) =>{
    // const[name, setName] = useState([]);
    const[data, setData] = useState(['null']);
    let {name} = useParams();
    
    useEffect(()=> {
        getData();
    },[name])

    const getData = () => {
        let api;
        if (name === 'null'){
            api = `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=`;
        }
        else{
            api = `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}`;
        }
    
        axios.get(api).then((res) => {
            setData(res.data.cars);
        })
        .catch((err) => console.log(err));
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    useEffect(()=> {
        getData();
    },[])
    return(
        <>
            
            <Container className='cardCustom'>
                <Row >
                    <h1>Detail Car</h1>
                    <div className='details'>
                        <Col>
                    
                        </Col>
                        <Col>
                            <Card style={{ width: '333px' }} className="custom-card">
                                <Card.Img variant="top" src={data[0].image} alt="Gambar Mobil"/>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">{data[0].name}</Card.Subtitle>
                                    <Card.Title>{data[0].price}</Card.Title>
                                    <Card.Text>
                                        {data[0].category}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Detailss;