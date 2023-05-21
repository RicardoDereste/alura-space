import React from 'react'
import styles from './Popular.module.sass'
import photosPopular from './photos-popular.json'

export default function Popular() {
    return (
        <aside className={styles.popular}>
            <h2>Popular</h2>
            <ul className={styles.popular__images}>
                {photosPopular.map((photosPopular) => {
                    return (
                        <li key={photosPopular.id}>
                            <img src={photosPopular.path} alt={photosPopular.alt} />
                        </li>
                    )
                })}
            </ul>
            <button>See More Photos</button>
        </aside>
    )
}
