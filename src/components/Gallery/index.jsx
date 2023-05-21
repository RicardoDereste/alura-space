import Tags from '../Tags'
import styles from './Gallery.module.sass'
import photos from './photos.json'
import Cards from './Cards'
import { useState } from 'react'

export default function Gallery() {
  const [items, setItems] = useState(photos)
  const tags = [...new Set(photos.map((valueTags) => valueTags.tag))]

  const filterPhotos = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag
    })
    setItems(newPhotos)
  }

  return (
    <section className={styles.gallery}>
        <h2>Browse the gallery</h2>
        <Tags tags={tags} filterPhotos={filterPhotos} setItems={setItems} />
        <Cards items={items} styles={styles} />
    </section>
  )
}
