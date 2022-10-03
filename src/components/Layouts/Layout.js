import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;