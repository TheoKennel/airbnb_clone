import './App.css'
import { IndexPage, LoginPage } from './pages/index';
import React from 'react';

const App = () => {
    return (
        <div>
            <LoginPage />
            <IndexPage />
        </div>
    );
};

export default App;

