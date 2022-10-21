import styles from '../../components/app/app.module.css';
import {PAGE_NOT_FOUND_TEXT} from '../../utils/constants' 

function PageNotFound404 (){


    return (
        <section className={styles.app_loading}>
                    {PAGE_NOT_FOUND_TEXT}
        </section> 
    )
}

export default PageNotFound404;