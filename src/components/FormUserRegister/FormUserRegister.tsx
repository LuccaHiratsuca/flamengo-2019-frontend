import { Input } from "@mui/material";
import { Button } from "@mui/material";
import styles from "./FormUserRegister.module.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../store/actions/actionAuthentication'
import { AppDispatch } from '../../store'

interface AuthState {
    loading: boolean;
    userInfo: null;
    userToken: string | null;
    error: null;
    success: boolean;
  }

const FormUserRegister = () => {

    const { loading, error } = useSelector((state: { auth: AuthState }) => state.auth);
    const dispatch: AppDispatch = useDispatch();
    const { register, handleSubmit } = useForm()

    const handleFormSubmit = (data: any) => {
        dispatch(userLogin(data))
    }

    return (
        <div className={styles.form}>
            <h1>FormUserRegister</h1>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Input 
                    {...register("email")} 
                    className={styles.input} 
                    type="text" 
                    placeholder="Email" 
                />

                <Input 
                    {...register("password")} 
                    className={styles.input} 
                    type="password" 
                    placeholder="Password" 
                />
                    <Button className={styles.button} variant="contained" color="primary" onClick={handleSubmit(handleFormSubmit)}>Register</Button>
                </form>
        </div>
    )
}

export default FormUserRegister