import React, {useState} from 'react';
import Header from "../Content/Header.jsx";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return  (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64 pl-9">
                <h1 className="text-4xl text-center pb-1">Login</h1>
                <form className="max-w-lg mx-auto">
                    <input type="email"
                           placeholder='your@email.com'
                           value={email}
                           onChange={ ev => setEmail(ev.target.value)}/>
                    <input type="password"
                           placeholder='Mot de passe'
                           value={password}
                           onChange={event => setPassword(ev.target.value)}/>
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Vous n'avez pas encore de compte ? <Link to={'/register'} className="underline text-black"> Inscrivez-vous </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;