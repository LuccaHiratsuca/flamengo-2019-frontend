import { Input } from "@mui/material";
import { Button } from "@mui/material";
import styles from "./FormUserRegister.module.css";
import { useForm } from "react-hook-form";

const FormUserRegister = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleFormSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <div className={styles.form}>
            <h1>FormUserRegister</h1>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Input className={styles.input} type="text" name="name" placeholder="Name" />
                    <Input className={styles.input} type="text" name="email" placeholder="Email" />
                    <Input className={styles.input} type="password" name="password" placeholder="Password" />
                    <Input className={styles.input} type="password" name="passwordConfirmation" placeholder="Password Confirmation" />
                    <Button className={styles.button} variant="contained" color="primary" onClick={handleSubmit(handleFormSubmit)}>Register</Button>
                </form>
        </div>
    )
}

export default FormUserRegister