import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Assignment18.css'; 

import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Nopage from "./pages/Nopage";

export default function Assignment18(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element={<Home/>} />
          <Route path = "blogs" element = {<Blogs />} />
          <Route path = "about" element = {<About />} />
          <Route path = "contact" element = {<Contact />} />
          <Route path = "*" element = {<Nopage />} />
          <Route path = "Login" element = {<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}