import React, {useState} from 'react';
import Header from "../Content/Header.jsx";
import {Link} from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const registerUser = async (ev) => {
        ev.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password,
             });
            alert('Inscription réussies, vous pouvez maintenant vous connectez')
        }   catch (e) {
            alert('Echec de l\'inscription, veuillez réessayer');
            }
    }
    return  (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">

                    <h1 className="text-4xl text-center pb-1">Créer un compte</h1>
                    <form className="max-w-lg mx-auto" onSubmit={registerUser}>
                        <input type="text"
                               placeholder="Théo Kosv"
                               value={name}
                               onChange={ev => setName(ev.target.value)}/>
                        <input type="email"
                               placeholder='your@email.com'
                               value={email}
                               onChange={ev => setEmail(ev.target.value)}/>
                        <input type="password"
                               placeholder='Mot de passe'
                               value={password}
                               onChange={ev => setPassword(ev.target.value)}/>
                    <button className="primary">S'inscrire</button>
                    <div className="text-center py-2 text-gray-500">
                        Vous avez déjà un compte ? <Link className="underline text-black" to={'/login'}> Connectez-vous</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;