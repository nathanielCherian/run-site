import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.nav_container}>
            <div className={styles.logo}>
                <span>TrackBound</span>
            </div>
            <div className={styles.searchbar_box}>
                <input type="text" className={styles.searchbar} placeholder="Search Colleges..."></input>
            </div>
        </div>
    )
}