import classes from './overlay.module.css';
import { GenContext } from "../../gen-state/gen.context";
import { useContext } from 'react';


const Overlay = () => {
  const { isLoading } = useContext(GenContext);

  return (
    <div className={`${classes.overlay} ${isLoading && classes.isLoading}`}>

      <div>
        <img src="/assets/icon-loading.svg" alt="" />
        <p>Do not refresh your page!</p>
      </div>

    </div>
  )
}

export default Overlay;