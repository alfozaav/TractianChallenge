import styles from '../styles/loginStyles.module.css';

const ErrorCard = ({msg}) => {
    return ( 
        <div className={styles.errorCard}>
            <span>{msg}</span>
        </div>
     );
}
 
export default ErrorCard;