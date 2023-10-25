// import styles from "./Login.module.css"
import FormUserRegister from "../../../components/FormUserRegister/FormUserRegister"
import styles from "./Login.module.css"

const Login = () => {
    return (
        <div className={styles.container}>
            <FormUserRegister />
        </div>
    );
};

export default Login;   