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
import CardHeader from 'react-bootstrap/esm/CardHeader';
import {useNavigate} from 'react-router-dom';


const Resultt = ({}) =>{
    // const[name, setName] = useState([]);
    const[data, setData] = useState(['null']);
    let {name} = useParams();
    const navigate = useNavigate();
    
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
    },[]);

    const redirect = () => {
        // console.log(name);
        navigate(`/details/${name}`);
    };
    return(
        <>
            <Container className='cardCustom'>
                <Row >
                {data && data.length > 0 ? (
                    data.map((item) => (
                        
                            <Card style={{ width: '333px' }} className="custom-card">
                                <Card.Img variant="top" src={item.image} alt="Gambar Mobil"/>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">{item.name}</Card.Subtitle>
                                    <Card.Title>{item.price}</Card.Title>
                                    <Card.Text>
                                        {item.category}
                                    </Card.Text>
                                    {/* <Button variant="success" onClick={redirect(item.name)}>Go somewhere</Button> */}
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                    ))
                ):(
                    <div>
                        <br />
                        <h1>Tidak ada data</h1>
                    </div>
                    
                )}
                </Row>
            </Container>
        </>
    )
}

export default Resultt;