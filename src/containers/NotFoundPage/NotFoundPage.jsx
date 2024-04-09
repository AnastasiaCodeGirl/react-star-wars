import {useLocation} from "react-router-dom";
import img from "./img/image.png"
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {

    let location = useLocation();

    return (
        <>
            <img src={img} alt="NotFound" className={styles.img} />
            <p className={styles.text}>No Match for <u>{location.pathname}</u></p>
        </>
    );
};


export default NotFoundPage;