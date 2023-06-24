import Container from 'react-bootstrap/Container';
import React, {useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom';


const Searchh = ({}) =>{
    let[name, setName] = useState(["null"]);
    const[data, setData] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=> {
        getData();
    },[])

    const getData = () => {
        const api = `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}`;
    
        axios.get(api).then((res) => {
            setData(res.data.cars);
        })
        .catch((err) => console.log(err));
    };

    const handleChangeName = (e) => {
        // setName(e.target.value);
        const value = e.target.value.trim(); // Menghapus spasi di awal dan akhir string

        if (value === '') {
            setName('null');
        } else {
            setName(value);
        }
    }
    const redirect = () => {
        // console.log(name);
        navigate(`/result/${name}`);
    };
    return(
        <>
            <Container className='search'>
                <Row>
                    <Col>
                        <p>Nama Mobil</p>
                        <input type="text" onChange={handleChangeName} />
                    </Col>
                    {/* <Col>
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
                    </Col> */}
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
                        {/* <button onClick={getData}>Cari Mobil</button> */}
                        <button onClick={redirect}>Cari Mobil</button>
                        {/* <button onClick={() => redirect(item.id)}>Pilih Mobil</button> */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Searchh;