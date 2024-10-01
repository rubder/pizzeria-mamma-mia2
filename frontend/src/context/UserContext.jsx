import React, { createContext, useContext, useState } from 'react';


const UserContext = createContext();


export const useUser = () => {
    return useContext(UserContext);
};


export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

    
    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            if (response.ok) {
                const data = await response.json();
                setToken(data.token);  
                setEmail(data.email);  
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

   
    const register = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setToken(data.token);  
                setEmail(data.email);  
            } else {
                throw new Error('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    
    const fetchUserProfile = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setEmail(data.email);  
            } else {
                throw new Error('Failed to fetch profile');
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

   
    const logout = () => {
        setToken(null);
        setEmail(null);
    };

    return (
        <UserContext.Provider value={{ token, email, login, register, fetchUserProfile, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext };
