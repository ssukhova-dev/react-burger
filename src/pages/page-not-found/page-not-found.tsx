import { FC } from 'react';
import styles from '../../components/app/app.module.css';
import {PAGE_NOT_FOUND_TEXT} from '../../utils/constants' 

const PageNotFound404: FC = () => {


    return (
        <section className={styles.app_loading}>
                    {PAGE_NOT_FOUND_TEXT}
        </section> 
    )
}

export default PageNotFound404;