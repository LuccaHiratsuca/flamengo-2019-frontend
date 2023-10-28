import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRoutes from './User/index';
import RentalsRoutes from './Rentals/index';

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user/*" element={<UserRoutes />} />
                <Route path="/rentals/*" element={<RentalsRoutes />} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesComponent;
