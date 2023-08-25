import { createSlice } from '@reduxjs/toolkit'


const data = [
    {
      id: 0,
      name: 'Hamburger',
      price: 9.84,
      Description: "Single or Double burger with  a bit of toppings filled with extra cheese and onions.",
      img: "/Images/Burger.jpg",
      Categories: "Lunch", 
      count: 1,
      special:false,
      
      Blurhash:"L8FqjtET03=]0yIVE2$$03-:~AIq",
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
      price: 12.84,
      Description: "Pizza with desired flavour of your choice with toppings straight out of the oven.",
      img: "/Images/Pizza.jpg",
      Categories: "Lunch", 
      count: 1,
      special:false,
      Blurhash:"L2F}y6J$000LTz-m=_Dj00D*0jVs",
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
      price: 15.32,
      Description: "Puncakes with syrup and your favourite fruite.",
      img: "/Images/Pancakes.jpg",
      Categories: "Breakfast", 
      count: 1,
      special:false,
      Blurhash:"LDHn]LE22z?H00s:nzM{03xu;JNG",
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
      price: 12.84,
      Description: "Bread and Eggs with your side dish toast and fry.",
      img: "/Images/BreadnEgg.jpg",
      Categories: "Breakfast", 
      count: 1,
      special:false,
      Blurhash:"LKI59}~pRnXUsmD%?bxaR.Io?GIU",
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
      price: 22.59,
      Description: "Grilled Ribbs Fryed Ribs Boiled Ribs you get to chose your Ribs.",
      img: "/Images/Ribs.jpg",
      Categories: "Dinner",    
      count: 1,
      special:true,
      Blurhash:"LDDRmAwJ0NWUNaIqkBxX0jWV}qR*",
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
      price: 17.38,
      Description: "Salted spaghetti with your vegitables and some tasty and seasoned shrimp.",
      img: "/Images/Spaghetti.jpg",
      Categories: "Dinner", 
      count: 1,
      special:false,
      Blurhash:"LgHn{OsjSin$?wR+oLWDx_NHoeWp",
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
      price: 32.76,
      Description: "Chose your steak from red juicy to meduim rare and fully cooked it your choice with a some fries on top.",
      img: "/Images/Steak.jpg",
      Categories: "Dinner", 
      count: 1,
      special:false,
      Blurhash:"L5GHbot:0000+~=_WSyD0M9Fd;s=",
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
      price: 5.23,
      Description: "Have a healty lunch salad with baked beans and ketchup add desired toppings.",
      img: "/Images/Salad.jpg",
      Categories: "Lunch", 
      count: 1,
      special:false,
      Blurhash:"LJK^$n-pVicu?^E2i]WpL3k=oyVs",
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
      price: 5.23,
      Description: "Crossaint Breakfast with Butter and a side coffe.",
      img: "/Images/Crossaint.jpg",
      Categories: "Breakfast", 
      count: 1,
      special:false,
      Blurhash:"LIIX:HMx-O^+k?JVyYE1D*I9~q-;",
      ingredients:[
  
        {tooltip:"Flour",Img:"/Images/Flour.jpg"},
        {tooltip:"Salt",Img:"/Images/Salt.jpg"},      
        {tooltip:"Butter",Img:"/Images/Butter.jpg"},
        {tooltip:"Water",Img:"/Images/Water.jpg"},
        {tooltip:"Yeast",Img:"/Images/Yeast.jpg"},
      ]
    }
    
  
  
  ]
  let jsonData = localStorage.getItem("myData");
  let newData = localStorage.getItem("newData");
      if(JSON.parse(jsonData)===null){
        jsonData=[]
     }
     else{
      jsonData =JSON.parse(jsonData)
     }
  
      if(JSON.parse(newData)===null){
        newData=true
     }
     else{
      newData =JSON.parse(newData)
      newData=newData.New
     }
  
      // { name: "John Doe", age: 30, email: "john@example.com" }

  
  const initialState = {
    Menu: data,
    Filter_tag: "All",
     sub_Menu:[
      {
        id: 1,
        name: 'Pizza',
        price: 12.84,
        Description: "Pizza with desired flavour of your choice with toppings straight out of the oven.",
        img: "/Images/Pizza.jpg",
        Categories: "Lunch", 
        count: 1,
        special:false,
        Blurhash:"L2F}y6J$000LTz-m=_Dj00D*0jVs",
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
        price: 15.32,
        Description: "Puncakes with syrup and your favourite fruite.",
        img: "/Images/Pancakes.jpg",
        Categories: "Breakfast", 
        count: 1,
        special:false,
        Blurhash:"LDHn]LE22z?H00s:nzM{03xu;JNG",
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
        price: 12.84,
        Description: "Bread and Eggs with your side dish toast and fry.",
        img: "/Images/BreadnEgg.jpg",
        Categories: "Breakfast", 
        count: 1,
        special:false,
        Blurhash:"LKI59}~pRnXUsmD%?bxaR.Io?GIU",
        ingredients:[
          {tooltip:"Bread",Img:"/Images/Bread.jpg"},
          {tooltip:"Eggs",Img:"/Images/Eggs.jpg"},
          {tooltip:"Salt",Img:"/Images/Salt.jpg"},
          {tooltip:"Milk",Img:"/Images/Milk.jpg"},
          {tooltip:"Butter",Img:"/Images/Butter.jpg"},
          
          
        ]
      }
  
    ],
    OrderList: jsonData,

    
   New:newData
  
  }
  
  

const menuSlice = createSlice({
  name: 'Menu',
  initialState,
  reducers: {
    Filter: (state, action) => {
            const newMenu = data.filter((item) => action.payload === item.Categories);

      if (action.payload === 'Dinner') {
        const specialMenu = newMenu.map((item) =>
          item.id === 4 ? { ...item, special: false, ingredients: {} } : item
        );

        state.Menu = specialMenu;
        state.Filter_tag = action.payload;
        return
      }

      if (action.payload === 'all') {
        state.Menu = data;
        state.Filter_tag = action.payload;
        return
      }
      state.Menu = newMenu;
      state.Filter_tag = action.payload;
    },
    Add_Order: (state,action)=>{
        
       if(state.New===false){
        const NewOrder=state.OrderList.map((item)=>{
           if(item.id===state.OrderList.length-1){
            const existingItem = item.SmallList.find((item) => item.id === action.payload.id);
           
            const newSmall=item.SmallList.map((sm)=>{
              if(sm.id===action.payload.id){

                return {...sm,count:sm.count+=1}
              }
              else{
                return sm
              }
            })
            let totalSum =item.SmallList.reduce((sum, item) => {
              const New=item.price* item.count 
              return sum +New
            }, 0);
            const sum=action.payload.price*action.payload.count
           totalSum+=sum
           return {...item,SmallList:existingItem
            ? newSmall:[...item.SmallList,action.payload],Payed:false,Total:parseFloat(totalSum).toFixed(2)}
          }
          else{             
            return item
          }
        })
        const jsonData =JSON.stringify(NewOrder)
        localStorage.setItem("myData",jsonData)
                
        state.OrderList=NewOrder
        return      
      }else if(state.New===true){
      let totalSum =[action.payload].reduce((sum, item) => {
        const New=item.price* item.count
              return sum+New
      }, 0);
      const NewOrder=[...state.OrderList,{id:state.OrderList.length,SmallList: [action.payload],Payed:false,Total:parseFloat(totalSum).toFixed(2)}];
     
        state.OrderList=NewOrder
        state.New=false
        
        
        const newData =JSON.stringify({New:false})
        localStorage.setItem("newData",newData)
        const jsonData =JSON.stringify(NewOrder)
        localStorage.setItem("myData",jsonData)
                return      

       }
    },
    RemoveOne:(state,action)=>{
      const NewOrders = state.OrderList.map((item)=>{
        let totalSum =item.SmallList.reduce((sum, item) => {
          const New=item.price* item.count 
          return sum +New
        }, 0);
        const sum=action.payload.price*action.payload.count
       totalSum-=sum
     
     
       if(item.Payed===false){
         const SmallList = item.SmallList.filter((itm)=>itm.id!==action.payload.id)
         return {...item,SmallList:SmallList,Total:parseFloat(totalSum).toFixed(2)}
        }
        else{
          return item
        }
      })

      
      const jsonData =JSON.stringify(NewOrders)
      localStorage.setItem("myData",jsonData)
            state.OrderList =NewOrders
      return
     
    },
    Payment:(state,action)=>{
      const NewOrder=state.OrderList.map((item)=>{
       
        
        return {...item,Payed:true}
       
       
     })
     
     state.OrderList=NewOrder
     
     const jsonData =JSON.stringify(NewOrder)
     localStorage.setItem("myData",jsonData)
  
     const newData =JSON.stringify({New:true})
     localStorage.setItem("newData",newData)
     state.New=true 

    },
  }
});

export const { Filter,Add_Order,Payment,RemoveOne } = menuSlice.actions;

export default menuSlice.reducer;
