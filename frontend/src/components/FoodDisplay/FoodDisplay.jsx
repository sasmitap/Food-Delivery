/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './FoodDisplay.css' 
// import { food_list } from './../../assets/assets';
import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item,index) => {
          // When we want specific food item
          if (category==="All" || category===item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
            
        })}
      </div>
    </div>
  )
}

export default FoodDisplay