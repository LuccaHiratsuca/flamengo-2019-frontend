import { Input, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store/actions/actionAuthentication';
import { AppDispatch } from '../../store';
import styles from "./FormUserRegister.module.css";
import { redirect, useNavigate } from 'react-router-dom';
import { AuthState } from "../../types/interfaceAuthState";


const FormUserRegister = () => {
    const { loading, error, userToken } = useSelector((state: { auth: AuthState }) => state.auth);
    const dispatch: AppDispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleFormSubmit = (data: any) => {
        
        dispatch(userLogin(data))
            .then((action: any) => {
                console.log(action);
                if (action.type.endsWith('fulfilled')) {
                    navigate("/rentals");
                }
            });
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className={styles.formContainer}>
                    <h1>WELCOME TO THE MATO</h1>
                    <Input 
                        {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email address" } })}
                        className={styles.input} 
                        type="text"     
                        placeholder="Email" 
                        value="admin@sa.com"
                    />

                    <Input 
                        {...register("password")} 
                        className={styles.input} 
                        type="password" 
                        placeholder="Password" 
                        value="123456"
                    />

                    <Button className={styles.button} variant="contained" color="primary" type="submit" onClick={handleSubmit(handleFormSubmit)}>SIGN IN</Button>
                </div>
            </form>
        </div>
    )
}

export default FormUserRegister;
