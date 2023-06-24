import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cars from "./pages/Cars";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ResultPage from "./pages/Res";


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cars" element={<Cars />}/>
          <Route path="/result/:name" element={<ResultPage />}/>
        </Routes>
      </BrowserRouter>
      {/* <FAQPage /> */}
    </>
  )
}

export default App
