import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/User/Login/Login';

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default UserRoutes;
