//  Styles
import styles from '../styles/infoStyles.module.css';

const Title = (props) => (
    <div className={styles.title__container}>
        <h1>{props.title}</h1>
    </div>
)
 
export default Title;