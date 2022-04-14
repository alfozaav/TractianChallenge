//  Imports
import {useNavigate} from 'react-router-dom';
//  Styles
import styles from '../styles/infoStyles.module.css';

const InfoCard = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${props.category}/${props.idTo}`)
    }

    return ( 
        <div className={styles.infoCard} onClick={handleClick}>
            <span>{props.id}</span>
            <span>{props.name}</span>
            <span>{props.txt}</span>
        </div>
     );
}
 
export default InfoCard; 