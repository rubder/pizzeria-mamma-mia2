import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const UserContext = createContext();

// Hook personalizado para usar el contexto del usuario
export const useUser = () => {
    return useContext(UserContext);
};

// Componente proveedor del contexto del usuario
export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true); 

    const login = (newToken) => {
        setToken(newToken);
    };

    const logout = () => {
        setToken(null);
    };

    return (
        <UserContext.Provider value={{ token, login, logout }}>
            {children}
        </UserContext.Provider>
    );
    
};

export { UserContext };
