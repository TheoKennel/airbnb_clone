import React, {useContext} from 'react';
import {UserContext} from "../Content/UserContext.jsx";
import {Link, Navigate, useParams} from "react-router-dom";

const AccountPage = () => {
    const {ready, user} = useContext(UserContext)

    if(!ready) {
        return 'Loading...';
    }

    if(ready && !user) {
        return <Navigate to={'/login'}/>
    }

    const {subpage} =  useParams();


    return (
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link className="p-2 px-6 bg-primary text-white rounded-full" to={'/account'}>My profile</Link>
                <Link className="p-2 px-6" to={'/account/bookings'}>My bookings</Link>
                <Link  className="p-2 px-6" to={'/account/places'}>My accommodations</Link>
            </nav>
        </div>
    );
};

export default AccountPage;