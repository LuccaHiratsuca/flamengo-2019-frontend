import { Routes, Route } from 'react-router-dom';
import {Rentals} from '../../pages/Rentals/Rentals/Rentals';
import FormNewRental from '../../components/FormNewRental/FormNewRental';

const RentalsRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Rentals/>} />
            <Route path='/:id' element={<h1>Details</h1>} />
            <Route path='/new' element={<FormNewRental/>} />
        </Routes>
    );        
}

export default RentalsRoutes;
