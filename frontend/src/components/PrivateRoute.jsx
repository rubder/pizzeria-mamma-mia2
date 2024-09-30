import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const PrivateRoute = ({ component: Component }) => {
    const { token } = useUser(); 
    console.log("Token:", token);

    return token ? <Component /> : <Navigate to="/login" />; 
};
export default PrivateRoute;
