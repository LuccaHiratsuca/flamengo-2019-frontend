import { Link } from 'react-router-dom'; 
import styles from './Header.module.css';
import { useSelector } from 'react-redux'; 

export const Header = ({path} : {path?: string}) => {
    const userEmail = useSelector((state: any) => state.auth.userInfo.email);

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.logo}>{path}</h1>
                <Link to="/user/details" className={styles.userSection}>
                    <span className={styles.fakeIcon}></span>
                    <span className={styles.userEmail}>{userEmail}</span>
                </Link>
            </header>
        </>
    );
};
