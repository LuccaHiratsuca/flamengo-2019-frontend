import  AuthVerifier from "../../../components/AuthVerifier/AuthVerifier"
import ListRentals from "../../../components/ListRentals/ListRentals"

export const Rentals = () => {

    return (
      <>
        <AuthVerifier />
        <h1> Rentals </h1>
        <ListRentals />
      </>

    )
}

