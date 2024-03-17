import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock ,faFire} from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
    const {recapie,addToCart}=props
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img className='h-[200px]' src={recapie.recipe_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recapie.recipe_name}</h2>
    <p>ingredients:{recapie.ingredients?.length}</p>
    <ul>
        {
           recapie.ingredients.map((li,index)=>(
            <li key={index} className='list-item'>{li}</li>
           )) 
        }
    </ul>
    <div className='flex justify-around items-center'>
        <p><FontAwesomeIcon icon={faClock}/> {recapie.prepare_time}</p>
        <p><FontAwesomeIcon icon={faFire}/> {recapie.Calories}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-success rounded-xl text-white" onClick={()=>addToCart(recapie)}>Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;