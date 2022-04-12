import styles from '../styles/infoStyles.module.css';
import {useHistory} from 'react-router-dom';

const InfoCard = (props) => {

    const history = useHistory();

    const handleClick = () => {
        history.push(`/${props.category}/${props.idTo}`)
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