//  Import
import { useNavigate } from 'react-router-dom';
//  Styles
import styles from '../styles/homeStyles.module.css';

const MenuCard = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.urlTo)
    }

    return (
        <div className={styles.menuCard} onClick={handleClick}>
            <img src={props.img} alt={props.alt} />
            <h3>{props.txt}</h3>
        </div>
    )
}


export default MenuCard;