import React, {useContext} from 'react';
import {UserContext} from "../Content/UserContext.jsx";
import {Link, Navigate, redirect, useParams} from "react-router-dom";

const AccountPage = () => {
    const {ready, user, setUser} = useContext(UserContext)

    let {subpage} =  useParams();
    if(subpage === undefined) {
        subpage = 'profile'
    }

    async function logout() {
        await axios.post('/logout')
    }

    if(!ready) {
        return 'Loading...';
    }

    if(ready && !user && !redirect) {
        return <Navigate to={'/login'}/>
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }


    const linkClasses = (type=null) => {
        let classes =  'p-2 px-6'
        if( type === subpage || (subpage === undefined && type === 'profile')) {
            classes += 'bg-primary text-white rounded-full'
        }
        return classes;
    }

    return (
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
                <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings</Link>
                <Link  className={linkClasses('places')} to={'/account/places'}>My accommodations</Link>
            </nav>
            {subpage === 'profile' && (
            <div className="text-center max-w-lg mx-auto">
                Connecté en tant que {user.name} ({user.email}) <br/>
                <button onClick={logout}  className="primary max-w-sm mt-2">Déconnexion</button>
            </div>
            )}

        </div>
    );
};

export default AccountPage;