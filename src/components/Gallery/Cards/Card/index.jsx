import open from './open.png'
import favorite from './favorite.png'

export default function Card({ item, style }) {
  return (
    <li className={style.gallery__card}>
      <img
        className={style.gallery__image}
        src={item.image}
        alt={item.title}
      />
      <p className={style.gallery__description}>{item.title}</p>
      <div>
        <p>{item.credits}</p>
        <span>
          <img src={favorite} alt="favorite icon" />
          <img src={open} alt="open Modal icon" />
        </span>
      </div>
    </li>
  );
}