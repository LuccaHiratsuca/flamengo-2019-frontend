import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRentals } from '../../store/actions/actionRentals';
import { RentalState, IRentals } from '../../types/interfaceRentalState';
import { AppDispatch } from '../../store';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { TableHead } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "./ListRentals.module.css";
import Filter from '../FilterListRentals/FilterListRentals';
import { IFilters } from '../../types/interfaceFilterOptions';


const ListRentals = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, infoRentals, error } = useSelector((state: { rentals: RentalState }) => state.rentals);
    const [displayedFilters, setDisplayedFilters] = useState<number>(4);

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleFilters = () => {
        setIsExpanded(!isExpanded);
        setDisplayedFilters(isExpanded ? 4 : 6);
    };
  
    useEffect(() => { 
        dispatch(getRentals());
    }, [dispatch]);
  
    const [filters, setFilters] = useState<IFilters>({
        dataAluguel: [],
        identifier: [],
        status: [],
        cpfCorretor: [],
        cpfLocatario: [],
        idImovel: [],
      });
      
      const handleFilterChange = (field: keyof IFilters) => (event: React.ChangeEvent<{}>, value: IFilters[keyof IFilters] | null) => {
        setFilters({ ...filters, [field]: value });
      };
  
    if (loading) {
        return <p>Loading...</p>;
    }
  
    if (error) {
        return <p>Error: {error.message}</p>;
    }
  
    if (!infoRentals || infoRentals.length === 0) {
        return <p>No rental information available.</p>;
    }

  
    const getFilteredRentals = (excludeFilterKey?: keyof IFilters) => {
        return Array.isArray(infoRentals) ? infoRentals.filter((rental: IRentals) => {
            return Object.entries(filters).every(([key, filterOptions]) => {
                if (!filterOptions || filterOptions.length === 0 || key === excludeFilterKey) return true;
        
                return filterOptions.some((filterOption: any) => {
                    if (!filterOption || !filterOption.label) return false;
        
                    const rentalValue = rental[key as keyof IRentals];
                    if (rentalValue == null) return false;
        
                    return String(rentalValue).toLowerCase().includes(filterOption.label.toLowerCase());
                });
            });
        }) : [];
    };

    const getUniqueOptions = (key: keyof IRentals) => {
        const filteredRentals = getFilteredRentals(key);
        const uniqueValues = new Set(filteredRentals.map(rental => String(rental[key])));
        return Array.from(uniqueValues).map(value => ({
            value,
            label: value,
        }));
    };
    
    const filteredRentals = getFilteredRentals();
    return (
      <div>
            <div className={styles.filter}>
                <h2> What're you looking for?</h2>
                <div className={styles.filterContent}>
                    <div className={styles.filtersContainer}>
                        {displayedFilters >= 1 && <Filter label="Data Aluguel" value={filters.dataAluguel} onChange={handleFilterChange('dataAluguel')} options={getUniqueOptions('dataAluguel')}/>}
                        {displayedFilters >= 2 && <Filter label="Identifier" value={filters.identifier} onChange={handleFilterChange('identifier')} options={getUniqueOptions('identifier')} />}
                        {displayedFilters >= 3 && <Filter label="Status" value={filters.status} onChange={handleFilterChange('status')} options={getUniqueOptions('status')} />}
                        {displayedFilters >= 4 && <Filter label="CPF Corretor" value={filters.cpfCorretor} onChange={handleFilterChange('cpfCorretor')} options={getUniqueOptions('cpfCorretor')} />}
                        {displayedFilters >= 5 && <Filter label="CPF Locatário" value={filters.cpfLocatario} onChange={handleFilterChange('cpfLocatario')} options={getUniqueOptions('cpfLocatario')} />}
                        {displayedFilters >= 6 && <Filter label="ID Imóvel" value={filters.idImovel} onChange={handleFilterChange('idImovel')} options={getUniqueOptions('idImovel')} />}
                    </div>
                    <button className={styles.toggleButtonIcon} onClick={toggleFilters}>
                        {isExpanded ? "-" : "+"}
                    </button>
                </div>
            </div>
            <TableContainer component={Paper} className={styles.tableContainer}>
                <Table aria-label="rentals table" className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Data Aluguel</TableCell>
                            <TableCell>Identifier</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>CPF Corretor</TableCell>
                            <TableCell>CPF Locatário</TableCell>
                            <TableCell>ID Imóvel</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRentals.map((rental, index) => (
                            <TableRow key={index}>
                                <TableCell>{rental.dataAluguel}</TableCell>
                                <TableCell>{rental.identifier}</TableCell>
                                <TableCell>{rental.status}</TableCell>
                                <TableCell>{rental.cpfCorretor}</TableCell>
                                <TableCell>{rental.cpfLocatario}</TableCell>
                                <TableCell>{rental.idImovel}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ListRentals;
