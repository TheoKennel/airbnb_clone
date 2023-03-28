import React, {useContext} from 'react';
import {UserContext} from "../Content/UserContext.jsx";
import {Link, Navigate} from "react-router-dom";

const AccountPage = () => {
    const {ready, user} = useContext(UserContext)

    if(!ready) {
        return 'Loading...';
    }

    if(ready && !user) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div>
            <nav className="w-full flex mt-8 gap-4">
                <Link className="p-2 px-4 bg-gray-300 rounded-full" to={'/account'}>My places</Link>
                <Link className="p-2 px-4" to={'/account/bookings'}>My bookings</Link>
                <Link  className="p-2 px-4" to={'/account/places'}>My accommodations</Link>
            </nav>
        </div>
    );
};

export default AccountPage;