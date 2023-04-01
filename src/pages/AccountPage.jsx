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

     let {subpage} =  useParams();
    if(subpage === undefined) {
        subpage = 'profile'
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
            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings</Link>
                <Link  className={linkClasses('places')} to={'/account/places'}>My accommodations</Link>
            </nav>
        </div>
    );
};

export default AccountPage;