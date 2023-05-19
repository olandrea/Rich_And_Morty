import { Link } from 'react-router-dom';
import style from './Card.module.css';
import { addFav, removeFav } from '../../Redux/action';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {
 
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
     isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose });
     setIsFav(!isFav)
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

   return (
         
      <Link to={`/detail/${id}`}>
        <div className={style.contenedor}>
        {
         ( <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>)
        }
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

const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (character) => dispatch(addFav(character)),
     removeFav: (id) => dispatch(removeFav(id)),
   }
};

const mapStateToProps =(state) => {
  return{
    myFavorites: state.myFavorites
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)