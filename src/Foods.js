import React from 'react'

export default function Foods(props) {
  return (
    <div className="food">
      <img className="images" src={props.imgUrl} alt=" not displaying" />
      <div className="foodDetails">
        <div className='mealNamePrice'>
          <h1>{props.strMeal} </h1>
          <h3>{props.price}</h3>
        </div>
        <div>
          <p className="para">Served with french fries and + drink</p>
          <p className="description">{props.description.slice(0,100)}...</p>
        </div>
      </div>
      <div className="footer">
        <p>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star unchecked"></span>
        </p>
        <button>+</button>
      </div>
     
    </div>
    
  )
}
