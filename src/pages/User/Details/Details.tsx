import { useSelector } from 'react-redux';
import styles from './Details.module.css';
import { Header } from '../../../components/Header/Header';

export const Details = () => {
    const userEmail = useSelector((state: any) => state.auth.userInfo.email);
    const userToken = useSelector((state: any) => state.auth.userInfo.token);

    return (
        <>
        <Header path="User Details" />
        <div className={styles.detailsContainer}>
            <h1 className={styles.detailsTitle}>My informations</h1>
            <div className={styles.detail}>
                <h2>Email: </h2>
                <span>{userEmail}</span>
            </div>
            <div className={styles.detail}>
                <h2>Token: </h2>
                <span>{userToken}</span>
            </div>
        </div>
        </>
    );
};
