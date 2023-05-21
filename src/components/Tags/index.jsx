import styles from './Tags.module.sass'
import photos from '../Gallery/photos.json'

export default function Tags({tags, filterPhotos, setItems}) {
  return (
    <div className={styles.tags}>
        <p>Filter by tags:</p>
        <ul className={styles.tags__list}>
            {tags.map((tag) => {
              return <li key={tag} onClick={() => filterPhotos(tag)}>{tag}</li>
            })}
            <li onClick={() => setItems(photos)}>All</li>
        </ul>
    </div>
  )
}
