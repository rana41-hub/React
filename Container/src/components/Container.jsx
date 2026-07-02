import styles from "../Container.module.css";

const Container = (props) => {

return <div className={styles.container}>{props.children}</div>;
}

export default Container;

//Children is a special prop for passing elements into components. 