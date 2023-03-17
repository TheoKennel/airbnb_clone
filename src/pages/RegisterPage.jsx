import React from 'react';
import Header from "../Content/Header.jsx";
import {Link} from "react-router-dom";

const RegisterPage = () => {
    return  (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64 pl-9">
                <h1 className="text-4xl text-center pb-1">Register</h1>
                <form className="max-w-lg mx-auto">
                    <input type="text" placeholder="Théo Kosv"/>
                    <input type="email" placeholder='your@email.com'/>
                    <input type="Mot de passe" placeholder='Mot de passe'/>
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Vous avez déjà un compte ? <Link className="underline text-black" to={'/login'}> Connectez-vous</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;