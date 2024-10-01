import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
    const { token } = useUser(); 
    console.log("Token:", token);

   
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
