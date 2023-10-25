import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/User/Login/Login';
// import LoginScreen from '../../pages/Login';

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>404 - User - Not Found</h1>} />
        </Routes>
    );
}

export default UserRoutes;
