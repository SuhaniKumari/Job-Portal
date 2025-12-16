//context API
import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext, useContext } from "react";

export const AuthContext = createContext();

//provider


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    
    const [services, setServices] = useState(" ");
    const storeTokenInLs = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };
    let isLoggedIn = !!token;
    console.log('isLoggedIn',isLoggedIn)

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };



const getServices  = async() => {
    try {
        const response = await fetch ("http://localhost:5000/api/data/service",{
            method: "GET",

        });
        if(response.ok){
            const data = await response.json();
            console.log(data.msg);
            setServices(data.msg);
        }
    } catch (error) {
        console.log(`service error: ${error}`);
    }
    
}


useEffect(() => {
    getServices();
}, []);

    return (<AuthContext.Provider value={{ isLoggedIn, storeTokenInLs, LogoutUser, services }}>
        {children}
    </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }

    return authContextValue;

}
