import { Routes, Route } from 'react-router-dom';
import {Rentals} from '../../pages/Rentals/Rentals/Rentals';

const RentalsRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Rentals/>} />
            <Route path='/:id' element={<h1>Details</h1>} />
        </Routes>
    );        
}

export default RentalsRoutes;
