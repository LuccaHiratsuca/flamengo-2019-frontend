import React, { useState } from 'react';
import { Input, Button, Alert } from "@mui/material";
import styles from "./FormNewRental.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { newRental } from "../../store/actions/actionRentals";
import { AppDispatch, RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header';


interface RentalFormState {
  cpfCorretor: string;
  cpfLocatario: string;
  idImovel: string;
}

const FormNewRental: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const rentalError = useSelector((state: any) => state.rentals.infoRentals.msgErro);
  const navigate = useNavigate();


  const [formState, setFormState] = useState<RentalFormState>({
    cpfCorretor: '',
    cpfLocatario: '',
    idImovel: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
    dispatch(newRental(formState))
      .unwrap()
      .then(() => {
        setSubmitted(true);
        setFormState({
          cpfCorretor: '',
          cpfLocatario: '',
          idImovel: '',
        });
        setTimeout(() => {setSubmitted(false); navigate('/rentals')}, 2000);
      })
      .catch(() => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
      });
  };

  return (
    <>
        <Header path="HomePage > New Rental" />
        <div className={styles.form}>
        {submitted && rentalError != "" ? (
            <Alert severity="error" className={`${styles.alert} ${styles.alertError}`}>
            {rentalError}
            </Alert>
        ) : submitted ? (
            <Alert severity="success" className={`${styles.alert} ${styles.alertSuccess}`}>
            Rental Registered with Success!
            </Alert>
        ) : null}
        <form onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
            <h1>Register new Rental</h1>
            <Input
                className={styles.input}
                value={formState.cpfCorretor}
                onChange={handleInputChange}
                name="cpfCorretor"
                type="text"
                placeholder="CPF Corretor"
            />
            <Input
                className={styles.input}
                value={formState.cpfLocatario}
                onChange={handleInputChange}
                name="cpfLocatario"
                type="text"
                placeholder="CPF Locatario"
            />
            <Input
                className={styles.input}
                value={formState.idImovel}
                onChange={handleInputChange}
                name="idImovel"
                type="text"
                placeholder="Id Movel"
            />
            <Button className={styles.button} variant="contained" color="primary" type="submit">
                SUBMIT
            </Button>
            </div>
        </form>
        </div>
    </>
  );
};

export default FormNewRental;