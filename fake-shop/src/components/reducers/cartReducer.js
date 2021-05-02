import Item1 from '../../images/item1.png'
import Item2 from '../../images/item2.png'
import Item3 from '../../images/item3.png'
import Item4 from '../../images/item4.png'
import Item5 from '../../images/item5.png'
import Item6 from '../../images/item6.png'

const initState = {
   items: [
      {id:1,title:'Airplane', desc: "Our most well crafted air vehicle", price:110,img:Item1},
      {id:2,title:'Baboon', desc: "This is a great specimen", price:80,img: Item2},
      {id:3,title:'Boat', desc: "Will get you across the sea.",price:120,img: Item3},
      {id:4,title:'Grapes', desc: "Our finest grapes grown in our backyard.", price:260,img:Item4},
      {id:5,title:'Peppers', desc: "DELICIOUS", price:160,img: Item5},
      {id:6,title:'Country Block', desc: "Street walk.",price:90,img: Item6}
   ],
   addedItems:[],
   total: 0
}

const cartReducer = (state = initState,action)=>{
   return state;
}

export default cartReducer;