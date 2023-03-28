import React, {useContext} from 'react';
import {UserContext} from "../Content/UserContext.jsx";
import {Navigate} from "react-router-dom";

const AccountPage = () => {
    const {ready, user} = useContext(UserContext)

    if(!ready) {
        return 'Loading...';
    }

    if(ready && !user) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div>account page for {user?.name}</div>
    );
};

export default AccountPage;