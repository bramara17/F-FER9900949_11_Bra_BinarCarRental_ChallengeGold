import Container from 'react-bootstrap/Container';
import React, {useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import axios from "axios";
import {useParams} from 'react-router-dom';


const Resultt = ({}) =>{
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
            <Container>
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt="Gambar Mobil" />
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                            <button onClick={() => redirect(item.id)}>Pilih Mobil</button>
                        </div>
                    ))
                ) : (
                    <div>
                        <br />
                        <h1>Tidak ada data</h1>
                    </div>
                    
                )}
            </Container>
        </>
    )
}

export default Resultt;