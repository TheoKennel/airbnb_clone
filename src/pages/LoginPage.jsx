import React, {useState} from 'react';
import Header from "../Content/Header.jsx";
import {Link, Navigate} from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const handleLogginSubmit = async (ev) => {
        ev.preventDefault();
        try {
            const response = await axios.post('/api/login', {email, password}, {withCredentials: true});
                alert('Connexion réussie');
                setRedirect(true);
            } catch (e) {
            alert('Connexion échouée, veuillez réessayer');
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return  (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64 pl-9">
                <h1 className="text-4xl text-center pb-1">Connexion</h1>
                <form className="max-w-lg mx-auto" onSubmit={handleLogginSubmit}>
                    <input type="email"
                           placeholder='your@email.com'
                           value={email}
                           onChange={ ev => setEmail(ev.target.value)}/>
                    <input type="password"
                           placeholder='Mot de passe'
                           value={password}
                           onChange={ ev => setPassword(ev.target.value)}/>
                    <button className="primary">Se connecter</button>
                    <div className="text-center py-2 text-gray-500">
                        Vous n'avez pas encore de compte ? <Link to={'/register'} className="underline text-black"> Inscrivez-vous </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;