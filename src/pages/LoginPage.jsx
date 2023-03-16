import React from 'react';
import Header from "../Content/Header.jsx";

const LoginPage = () => {
    return  (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64 pl-9">
                <h1 className="text-4xl text-center pb-1">Login</h1>
                <form className="max-w-lg mx-auto">
                    <input type="email" placeholder='your@email.com'/>
                    <input type="Mot de passe" placeholder='Mot de passe'/>
                    <button className="primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;