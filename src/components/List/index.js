import styles from './List.module.css';
const List = ({ children }) => {
    return (
        <ul className={styles.menu}>
            {children}
        </ul>
    )
}

export default List;