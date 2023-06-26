import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cars from "./pages/Details";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ResultPage from "./pages/Res";
import DetailsPage from "./pages/Details";


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cars" element={<Cars />}/>
          <Route path="/result/:name" element={<ResultPage />}/>
          <Route path="/details/:name" element={<DetailsPage />}/>
        </Routes>
      </BrowserRouter>
      {/* <FAQPage /> */}
    </>
  )
}

export default App
