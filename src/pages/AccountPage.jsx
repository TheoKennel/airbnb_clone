import React, {useContext} from 'react';
import {UserContext} from "../Content/UserContext.jsx";
import {Navigate} from "react-router-dom";

const AccountPage = () => {
    const {user} = useContext(UserContext)

    if(!user) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div>
            
        </div>
    );
};

export default AccountPage;