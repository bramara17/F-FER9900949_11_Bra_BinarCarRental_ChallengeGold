import React from 'react';
import NavbarMain from "../components/Navbar";
import { menuList } from '../helpers/constans';
import Searchh from "../components/search"
import Footer from "../components/Footer"
import Detail from "../components/Details"
import ResView from "../components/ResultView"

function Details(){
    return(
        <>
            <NavbarMain menu={menuList} logo="Binar" />
            <Searchh/>
            <Detail/>
            <Footer menu={menuList}/>
            
        </>
    )
}

export default Details;