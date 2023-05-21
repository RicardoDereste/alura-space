import home from 'assets/icons/home-active.png'
import mostLiked from 'assets/icons/most-liked-inactive.png'
import mostVisited from 'assets/icons/most-visited-inactive.png'
import news from 'assets/icons/news-inactive.png'
import surpriseMe from 'assets/icons/surprise-me-inactive.png'
import styles from './Menu.module.sass'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="/">Home</a>
            </li>
            <li className={styles.menu__item}>
                <img src={mostLiked} alt="" />
                <a href="/">Most Liked</a>
            </li>
            <li className={styles.menu__item}>
                <img src={mostVisited} alt="" />
                <a href="/">Most Visited</a>
            </li>
            <li className={styles.menu__item}>
                <img src={news} alt="" />
                <a href="/">News</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpriseMe} alt="" />
                <a href="/">Surprise me</a>
            </li>
        </ul>
    </nav>
  )
}
