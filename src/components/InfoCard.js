import styles from '../styles/infoStyles.module.css';

const InfoCard = (props) => {
    return ( 
        <div className={styles.infoCard}>
            <span>{props.id}</span>
            <span>{props.name}</span>
            <span>{props.txt}</span>
        </div>
     );
}
 
export default InfoCard; 