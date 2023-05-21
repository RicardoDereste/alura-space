import logo from './logo.png'
import search from './search.png'
import styles from './Header.module.sass'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo Alura Space" />
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="What are you looking for?"/>
                <img src={search} alt="Search Icon" />
            </div>
        </header>
    )
}