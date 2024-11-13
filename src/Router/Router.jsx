import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import PrivateRoute from '../Components/PrivateRoute.jsx';

//Pages
import Index from "../Pages/Index.jsx";
import About from "../Pages/About.jsx";
import Categories from "../Pages/Categories.jsx";
import Contact from "../Pages/Contact.jsx";
import Login from "../Pages/Login.jsx";
import Search from "../Pages/Search.jsx";
import Register from "../Pages/Register.jsx";


export default function Router(){
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/Index" element={<Index/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Categories" element={<Categories/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Search" element={<Search/>}/>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/" element={<PrivateRoute><Index /></PrivateRoute>} />
                </Routes>
            <Footer/>
        </BrowserRouter>

    );
}