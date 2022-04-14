//  Imports
import { useNavigate } from 'react-router-dom';
//  Styles
import styles from '../styles/styles.module.css';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }

    return (
        <header className={styles.header__container}>
            <img src='/logo.png' alt='Tractian logo' onClick={() => navigate('/home')} />
            <span onClick={handleLogout}>Log Out</span>
        </header>
    )
} 
 
export default Header;