import { Button } from "@mui/material"
import  AuthVerifier from "../../../components/AuthVerifier/AuthVerifier"
import ListRentals from "../../../components/ListRentals/ListRentals"
import styles from "./Rentals.module.css"

export const Rentals = () => {

    return (
      <>
        <AuthVerifier />
        <h1> Rentals </h1>
        <div>
          <Button className={styles.greenButton} variant="contained" href="/rentals/new"> New Rental </Button>
          <ListRentals /> 
        </div>
      </>

    )
}

