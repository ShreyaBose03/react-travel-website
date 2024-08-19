import React from 'react';
import { Link } from 'react-router-dom';


//coming from cards.jsx
const CardItem = (props) => {
  return (
    <div>
     <li className='cards__item'>
        <Link to={props.path} className='cards__item__link'>
          <figure data-category={props.label} className='cards__item__pic-wrap'>
            <img src={`${props.src}`} alt="Travel destination" className='cards__item__img'></img>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
      
    </div>
  )
}

export default CardItem
