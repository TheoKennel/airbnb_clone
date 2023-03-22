import './App.css'
import { IndexPage, LoginPage, RegisterPage } from './pages/index';
import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./Content/Layout.jsx";
import axios from "axios";
import {UserContextProvider} from "./Content/UserContext.jsx";

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;
const App = () => {
    return (
        <UserContextProvider>
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<IndexPage/>} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Route>
        </Routes>
        </UserContextProvider>
    );
};

export default App;

