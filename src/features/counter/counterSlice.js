import { createSlice } from '@reduxjs/toolkit'

const data = [
    {
      id: 0,
      name: 'Hamburger',
      price: "$9.84",
      Description: "Single or Double burger with  a bit of toppings filled with extra cheese and onions.",
      img: "/Images/Burger.jpg",
      Categories: "Lunch", 
      count: 0,
      special:false,
      ingredients:[
  
        {tooltip:"Bun",Img:"/Images/bun.jpg"},
       {tooltip:"Patty",Img:"/Images/patty.jpg"},
       {tooltip:"Lettuce",Img:"/Images/Lettuce.jpg"},
       {tooltip:"Tomatoes",Img:"/Images/Tomatoes.jpg"},
       {tooltip:"Mustard",Img:"/Images/Mustard.jpg"}
      ]
      
      
      
      
      
      
    },
    
    {
      id: 1,
      name: 'Pizza',
      price: "$12.84",
      Description: "Pizza with desired flavour of your choice with toppings straight out of the oven.",
      img: "/Images/Pizza.jpg",
      Categories: "Lunch", 
      count: 0,
      special:false,
      ingredients:[
        {tooltip:"Dough",Img:"/Images/Dough.jpg"},
        {tooltip:"Tomatoe-Sauce",Img:"/Images/Tomatoe-Sauce.jpg"},
        {tooltip:"Pepperoni",Img:"/Images/Pepperoni.jpg"},
        {tooltip:"Garlic",Img:"/Images/Garlic.jpg"},
        {tooltip:"Cheese",Img:"/Images/Cheese.jpg"},
      ]
    },
    {
      id: 2,
      name: 'Pancakes',
      price: "$15.32",
      Description: "Puncakes with syrup and your favourite fruite.",
      img: "/Images/Pancakes.jpg",
      Categories: "Breakfast", 
      count: 0,
      special:false,
      ingredients:[
        {tooltip:"Flour",Img:"/Images/Flour.jpg"},
        {tooltip:"Eggs",Img:"/Images/Eggs.jpg"},
        {tooltip:"Milk",Img:"/Images/Milk.jpg"},
        {tooltip:"BakingPowder",Img:"/Images/BakingPowder.jpg"},
        {tooltip:"Salt",Img:"/Images/Salt.jpg"},
        
      ]
    },
    {
      id: 3,
      name: 'Bread and Eggs',
      price: "$12.84",
      Description: "Bread and Eggs with your side dish toast and fry.",
      img: "/Images/BreadnEgg.jpg",
      Categories: "Breakfast", 
      count: 0,
      special:false,
      ingredients:[
        {tooltip:"Bread",Img:"/Images/Bread.jpg"},
        {tooltip:"Eggs",Img:"/Images/Eggs.jpg"},
        {tooltip:"Salt",Img:"/Images/Salt.jpg"},
        {tooltip:"Milk",Img:"/Images/Milk.jpg"},
        {tooltip:"Butter",Img:"/Images/Butter.jpg"},
        
        
      ]
    },
    {
      id: 4,
      name: 'Ribs',
      price: "$22.59",
      Description: "Grilled Ribbs Fryed Ribs Boiled Ribs you get to chose your Ribs.",
      img: "/Images/Ribs.jpg",
      Categories: "Dinner",    
      count: 0,
      special:true,
      ingredients:[
        {tooltip:"Ribs",Img:"/Images/Ribs_2.jpg"},
        {tooltip:"DryRub",Img:"/Images/DryRub.jpg"},
        {tooltip:"Butter",Img:"/Images/Butter.jpg"},
        {tooltip:"Barbecue sauces",Img:"/Images/BarbecueSauces.jpg"},
        
      ]
    },
    {
      id: 5,
      name: 'Spaghetti',
      price: "$17.38",
      Description: "Salted spaghetti with your vegitables and some tasty and seasoned shrimp.",
      img: "/Images/Spaghetti.jpg",
      Categories: "Dinner", 
      count: 0,
      special:false,
      ingredients:[
        {tooltip:"Spaghetti",Img:"/Images/Spaghetti_2.jpg"},
        {tooltip:"Tomatoe-Sauce",Img:"/Images/Tomatoe-Sauce.jpg"},
        {tooltip:"Garlic",Img:"/Images/Garlic.jpg"},
        {tooltip:"GroundMeat",Img:"/Images/GroundMeat.jpg"},
        
      ]
    },
    {
      id: 6,
      name: 'Steak',
      price: "$32.76",
      Description: "Chose your steak from red juicy to meduim rare and fully cooked it your choice with a some fries on top.",
      img: "/Images/Steak.jpg",
      Categories: "Dinner", 
      count: 0,
      special:false,
      ingredients:[
        {tooltip:"Steak",Img:"/Images/Steak_2.jpg"},
        {tooltip:"Salt",Img:"/Images/Salt.jpg"},
        {tooltip:"Butter",Img:"/Images/Butter.jpg"},
        {tooltip:"Garlic",Img:"/Images/Garlic.jpg"},
        
      ]
    }
    ,
    {
      id: 7,
      name: 'Salad',
      price: "$5.23",
      Description: "Have a healty lunch salad with baked beans and ketchup add desired toppings.",
      img: "/Images/Salad.jpg",
      Categories: "Lunch", 
      count: 0,
      special:false,
      ingredients:[
        
        {tooltip:"Tomatoes",Img:"/Images/Tomatoes.jpg"},
        {tooltip:"Lettuce",Img:"/Images/Lettuce.jpg"},
        
        {tooltip:"Cheese",Img:"/Images/Cheese.jpg"},
        {tooltip:"SaladDressing",Img:"/SaladDressing.jpg"},
      ]
      
    },
    {
      id: 8,
      name: 'Croissant',
      price: "$5.23",
      Description: "Crossaint Breakfast with Butter and a side coffe.",
      img: "/Images/Crossaint.jpg",
      Categories: "Breakfast", 
      count: 0,
      special:false,
      ingredients:[
  
        {tooltip:"Flour",Img:"/Images/Flour.jpg"},
        {tooltip:"Salt",Img:"/Images/Salt.jpg"},      
        {tooltip:"Butter",Img:"/Images/Butter.jpg"},
        {tooltip:"Water",Img:"/Images/Water.jpg"},
        {tooltip:"Yeast",Img:"/Images/Yeast.jpg"},
      ]
    }
    
  
  
  ]
  

const initialState = {
  value: 0,
  Menu:data

}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer