import { Routes, Route } from 'react-router-dom';
import {Rentals} from '../../pages/Rentals/Rentals/Rentals';

const RentalsRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Rentals/>} />
        </Routes>
    );        
}

export default RentalsRoutes;
