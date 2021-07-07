import React from 'react'
import Foods from './Foods'
import './App.css';
import img from './spinner.gif'

class App extends React.Component {
  state = { 
    foods:[],
    loading:true
   }

  componentDidMount()  {
    setTimeout(()=>{
      this.setState({
        loading:false
      })
    },100)

    fetch('https://asm-dev-api.herokuapp.com/api/v1/food')
    .then(res => res.json())
    .then(data => {
     this.setState({foods:data.data.meals})
    // console.log(foods)
    });
    // .catch(err => alert('Something went wrong!'))

  }

  render() { 
    let food = this.state.foods.map(food => {
      return <Foods key={food.strMeal} 
       imgUrl={food.strMealThumb}
       strMeal={food.strMeal}
       price={food.price}
       description={food.description}
       ratings={food.ratings}
       />
    });
    const {loading} = this.state;
    return (  
      <div className="container">
       <section className="grid-container">{loading?<img src={img} className="spinner" alt="" /> :food}</section>  
       <input type="button" value="Learn More" id="learn-more" />
     </div>
    );
  }
}
 
export default App ;
