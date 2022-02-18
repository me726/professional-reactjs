import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <h1 className={styles.headerText}>Welcome to the React Bookstore</h1>
        </header>
    );
}
export default Header;
