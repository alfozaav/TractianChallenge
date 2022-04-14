//  Imports
import { Link } from 'react-router-dom';
//  Styles
import styles from '../styles/errorPage.module.css';

const NotFoundPage = () => (
    <div className={styles.errorPage__container}>
        <img src='/errorImage.png' alt='Error  Page 404 Animation' />
        <h1>Oops!</h1>
        <h2>Page not found!</h2>
        <Link to='/'>Go back to Dashboard</Link>
    </div>
)

export default NotFoundPage;