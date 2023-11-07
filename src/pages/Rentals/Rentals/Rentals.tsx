import { Button } from "@mui/material";
import AuthVerifier from "../../../components/AuthVerifier/AuthVerifier";
import ListRentals from "../../../components/ListRentals/ListRentals";
import styles from "./Rentals.module.css";
import { Header } from "../../../components/Header/Header";

export const Rentals = () => {
    return (
      <>
        <AuthVerifier />
        <Header path="HomePage" />
        <div className={styles.titleWithButton}>
          <h1 className={styles.title}>Rentals</h1>
          <Button className={styles.greenButton} variant="contained" href="/rentals/new">New Rental</Button>
        </div>
        <ListRentals /> 
      </>
    );
}
