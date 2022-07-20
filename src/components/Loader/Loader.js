
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Grid } from  'react-loader-spinner'
import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={css.loaderBlock}>
            <Grid color="#00BFFF" height={100} width={100} />
            </div>
    )
    
};