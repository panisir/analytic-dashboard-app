// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { getUsers } from '../services/UserService';

const APIContext = createContext();

const APIProvider = ({ children }) => {

    const listUsers = async () => {
        return await getUsers();
    };

    return (
        <APIContext.Provider value={{ listUsers }}>
            {children}
        </APIContext.Provider>
    );
};

export { APIContext, APIProvider };