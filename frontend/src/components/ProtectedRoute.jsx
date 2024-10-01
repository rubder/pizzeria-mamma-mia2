import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const ProtectedRoute = ({ component: Component, redirectPath }) => {
    const { token } = useUser();

    return token ? <Navigate to={redirectPath} /> : <Component />;
};

export default ProtectedRoute;
