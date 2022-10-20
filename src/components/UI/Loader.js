import Spinner from "react-bootstrap/Spinner";
import styles from "./Loader.module.css";

const Loader = (props) => {
  return (
    
    <div className={styles.fullScreenLoader}>
     <Spinner animation="grow" variant="light">
      </Spinner>
    </div>
  );
};

export default Loader;
