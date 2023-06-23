import Container from 'react-bootstrap/Container';
import React, {useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../index.css';
import carMercy from '../assets/Mercedes.png';
import axios from "axios";


const Searchh = ({}) =>{
    const[name, setName] = useState([]);
    const[data, setData] = useState([]);
    
    useEffect(()=> {
        getData();
    },[])

    const getData = () => {
        const api = `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}`;
    
        axios.get(api).then((res) => {
            setData(res.data);
        })
        .catch((err) => console.log(err));
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    return(
        <>
            <Container className='search'>
                <Row>
                    <Col>
                        <p>Nama Mobil</p>
                        <input type="text" onChange={handleChangeName}/>
                    </Col>
                    <Col>
                        <p>Kategori</p>
                        <select id="dropdown" >
                            <option value="">-- Masukan Kapasitas Mobil --</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </Col>
                    <Col>
                        <p>Harga</p>
                        <input type="number" />
                    </Col>
                    {/* <Col>
                        <p>Status</p>
                        <select id="dropdown" >
                            <option value="">-- Pilih Status --</option>
                            <option value="false">Ada</option>
                            <option value="medium">Disewa</option>
                            <option value="large">Large</option>
                        </select>
                    </Col> */}
                    <Col>
                        <button onClick={getData}>Cari Mobil</button>
                    </Col>
                </Row>
                <Row>
                {
                    data.map((item) => (
                        <div>
                            <img src={item.image} />
                            <h1>{item.name}</h1>
                            <p>{item.price}</p><br />
                            <button onClick={() => redirect(item.id)}>Pilih Mobil</button>
                        </div>
                    ))
                }
                </Row>
            </Container>
        </>
    )
}

export default Searchh;