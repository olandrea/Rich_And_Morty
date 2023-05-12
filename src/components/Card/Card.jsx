import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
   return (
      <Link to={`/detail/${id}`}>
        <div className={style.contenedor}>
          <img src={image} alt='' />
          <p>name: {name}</p>
          <p>species: {species}</p>
          <p>gender: {gender}</p>
          <p>status: {status}</p>
          <p>origin: {origin}</p>
          <button onClick={()=>{onClose(id)}}>close</button>
        </div>
      </Link>
   );
}

export default Card;