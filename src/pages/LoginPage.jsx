import React from 'react';
import Header from "../Content/Header.jsx";

const LoginPage = () => {
    return  (
        <div className="mt-4">
            <h1 className="text-4xl text-center pb-1">Login</h1>
            <form className="max-w-lg mx-auto border">
                <input type="email" placeholder='your@email.com'/>
                <input type="Mot de passe" placeholder='Mot de passe'/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;