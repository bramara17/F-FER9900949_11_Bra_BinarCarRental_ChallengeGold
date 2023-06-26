import React from 'react';
import NavbarMain from "../components/Navbar";
import { menuList, FAQ } from '../helpers/constans.js';
import FAQPage from "../components/Faq";
import BestCar from "../components/BestCar";
import Banner from "../components/Banner";
import WhyUss from "../components/WhyUs";
import { checkList, WhyUs } from '../helpers/constans.js';
import Searchh from "../components/search"
import Testimony from "../components/Testimony"
import OrderNow from "../components/OrderNow"
import Footer from "../components/Footer"

function Home(){
    
    return(
        <>
            <NavbarMain menu={menuList} logo="Binar" />
            <Banner/>
            {/* <Searchh/> */}
            <BestCar checklist={checkList}/>
            <WhyUss object={WhyUs}/>
            <Testimony/>
            <OrderNow/>
            <FAQPage question={FAQ}/>
            <Footer menu={menuList}/>
        </>
    )
}

export default Home;