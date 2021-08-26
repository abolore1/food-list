import React from 'react'
import RatingStar from './RatingStar'

export default function Foods(props) {
  return (
    <div className="food">
      <img className="images" src={props.strCategoryThumb} alt=" not displaying" />
      <div className="foodDetails">
        <div className='mealNamePrice'>
          <h1>{props.strCategory} </h1>
        </div>
        <div>
          <p className="description">{props.strCategoryDescription.slice(0,45)}...</p>
        </div>
      </div>
      <div className="footer">
        <p className="para">
            <RatingStar />
        </p>
        <button>+</button>
      </div>
      
    </div>

  )
}
