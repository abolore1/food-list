import React from 'react'
import Foods from './Foods'
import './App.css';

class App extends React.Component {
  state = { 
    foods:[],
    loading:true
   }

  componentDidMount()  {

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => {
      console.log(data.categories)
     this.setState({foods:data.categories})

    })
    .catch(err => alert('Something went wrong!'))

  }

  render() { 
    let food = this.state.foods.map(food => {
      return <Foods key={food.strCategory} 
      strCategoryThumb={food.strCategoryThumb}
      strCategory={food.strCategory}
      strCategoryDescription={food.strCategoryDescription}
      // ratings={food.ratings}
       />
    });
    
    return (  
      <div className="container grid-container">
       {food}
      
     </div>
    );
  }
}
 
export default App ;
