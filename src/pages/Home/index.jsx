import styles from './Home.module.sass'
import Header from "components/Header";
import Banner from "components/Banner";
import Menu from "components/Menu";
import Footer from "components/Footer";
import Gallery from "components/Gallery";
import Popular from "components/Popular";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className={styles.main}>
                    <Menu />
                    <Banner />
                </div>
                <div className={styles.gallery}>
                    <Gallery />
                    <Popular />
                </div>
            </main>

            <Footer />
        </>
    )
}