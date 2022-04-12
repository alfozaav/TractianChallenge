import styles from '../styles/homeStyles.module.css';
import { useHistory } from 'react-router-dom';

const MenuCard = (props) => {

    const history = useHistory();

    const handleClick = () => {
        history.push(props.urlTo)
    }

    return (
        <div className={styles.menuCard} onClick={handleClick}>
            <img src={props.img} alt={props.alt} />
            <h3>{props.txt}</h3>
        </div>
    )
}


export default MenuCard;