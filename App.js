import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Stickers from "./pages/Stickers";
import Shirts from "./pages/Shirts";
import Tote from "./pages/Tote";
import styles from "./index.css"

export default function App() {
  return (
    
    <BrowserRouter basename="/cp-3/build/">
      <Routes className = {styles.menuRoute}>
        <Route className = {styles.menuRoute} path="/" element={<Layout />}>
          <Route index element={<Home />} className = "menuElement" />
          <Route className = {styles.menuElement} path="Stickers" element={<Stickers />} />
          <Route className = {styles.menuElement} path="Tote" element={<Tote />} />
          <Route className = {styles.menuElement} path="Shirts" element={<Shirts />} />
          <Route className = {styles.menuElement} path="About" element={<About />} />
          <Route className = {styles.menuElement} path="FAQ" element={<FAQ/>}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
