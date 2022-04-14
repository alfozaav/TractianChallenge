import styles from '../styles/editPage.module.css';
import { useNavigate } from 'react-router-dom';

const Modal = ({fn}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        fn();
        navigate('/home');
    }

    return (
        <div className={styles.modal__container}>
            <h1>New Data Sended!</h1>
            <button onClick={handleClick} className={styles.editPage_btn}>Ok</button>
        </div>
    )
}
 
export default Modal;