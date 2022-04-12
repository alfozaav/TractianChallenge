import { useHistory } from "react-router-dom";
import styles from '../styles/infoStyles.module.css';

const BackBtn = (props) => {

    const history = useHistory();

    const handleClick = () => {
        history.push(props.back);
    }

    return ( 
        <div className={styles.backBtn__container}>
            <div className={styles.backBtn} onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                <span>go back</span>
            </div>
        </div>
     );
}
 
export default BackBtn;