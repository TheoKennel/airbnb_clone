import './App.css'
import { IndexPage, LoginPage, RegisterPage } from './pages/index';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./Content/Layout.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<IndexPage/>} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;

