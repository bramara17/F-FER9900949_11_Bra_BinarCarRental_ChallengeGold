import React from 'react';
import NavbarMain from "../components/Navbar";
import { menuList } from '../helpers/constans';

function Cars(){
    return(
        <>
            <NavbarMain menu={menuList} logo="Binar - Cars" />
            <h1>ini halaman cars</h1>
        </>
    )
}

export default Cars;