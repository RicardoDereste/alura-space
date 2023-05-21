import banner from './banner.png'
import styles from './Banner.module.sass'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <h1>The most complete gallery in space</h1>
        <img src={banner} alt="The earth seen from space" />
    </div>
  )
}