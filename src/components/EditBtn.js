import { useNavigate } from "react-router-dom";
import styles from '../styles/editPage.module.css';

const EditBtn = ({itemId, urlTo}) => {

    const navigate = useNavigate();
    const handleEdit = e => {
        e.preventDefault();
        navigate(`${urlTo}/${itemId}`);
    }

    return ( 
            <button className={styles.editPage_btn} onClick={handleEdit}>Edit</button>
     );
}
 
export default EditBtn;