import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import PrivateRoute from '../Components/PrivateRoute.jsx';
import PublicRoute from '../Components/PublicRoute.jsx'; // New component for public routes

// Pages
import Index from "../Pages/Index.jsx";
import About from "../Pages/About.jsx";
import Categories from "../Pages/Categories.jsx";
import Contact from "../Pages/Contact.jsx";
import Login from "../Pages/Login.jsx";
import Search from "../Pages/Search.jsx";
import Register from "../Pages/Register.jsx";


export default function Router() {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<PublicRoute><Index /></PublicRoute>} /> 
                     {/* Home page, accessible by anyone */}
                    <Route path="/Login" element={<PublicRoute><Login /></PublicRoute>} />
                    <Route path="/Register" element={<PublicRoute><Register /></PublicRoute>} />

                    //for logged in user:
                    <Route path="/Index" element={<Index/>}/>
                    <Route path="/About" element={<About/>}/>
                    
                    {/* Protected Routes */}
                    <Route 
                        path="/Categories" 
                        element={
                            <PrivateRoute>
                                <Categories />
                            </PrivateRoute>
                        }
                    />
                    <Route 
                        path="/Contact" 
                        element={
                            <PrivateRoute>
                                <Contact />
                            </PrivateRoute>
                        }
                    />
                    <Route 
                        path="/Search" 
                        element={
                            <PrivateRoute>
                                <Search />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            <Footer />
        </BrowserRouter>
    );
}
