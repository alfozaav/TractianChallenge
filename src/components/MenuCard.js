import styles from '../styles/styles.module.css';
import { useHistory } from 'react-router-dom';

const MenuCard = (props) => {

    const history = useHistory();
    let url = props.urlTo;

    const handleClick = () => {
        history.push(`/${url}`)
    }

    return (
        <div className={styles.menuCard} onClick={handleClick}>
            <img src={props.img} alt={props.alt} />
            <h3>{props.txt}</h3>
        </div>
    )
}


export default MenuCard;