import React from 'react';
// import Potato from './Potato'
import PropTypes from 'prop-types'

function Food({name, picture, rating}){
  return (
    <div>
      <h2>I like {name}</h2>
      <h2>image {picture}</h2>
      <h4>rating {rating}/5</h4>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [
  {
    id: 1,
    name: 'ramen',
    image: 'http://xxx',
    rating: 5
  },
  {
    id: 2,
    name: 'kimchi',
    image: 'http://xxx',
    rating: 4.5
  },
  {
    id: 3,
    name: 'sam',
    image: 'http://xxx',
    rating: 3
  }
]

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => <Food key={dish.id} rating={dish.rating} name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;
