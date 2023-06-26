import React from 'react';
import NavbarMain from "../components/Navbar";
import { menuList, FAQ } from '../helpers/constans.js';
import FAQPage from "../components/Faq";
import BestCar from "../components/BestCar";
import Banner from "../components/Banner";
import WhyUss from "../components/WhyUs";
import ResView from "../components/ResultView"
import { checkList, WhyUs } from '../helpers/constans.js';
import Searchh from "../components/search"
import Footer from "../components/Footer"

function Result(){
    return(
        <>
            <NavbarMain menu={menuList} logo="Binar" />
            <Searchh/>
            <ResView/>
            <Footer menu={menuList}/>
        </>
    )
}

export default Result;