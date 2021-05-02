import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component{

   render () {
      let itemList = this.props.items.map(item => {
         return (
            <div className="card" key={item.id}>
               <span className="card-title"><b>{item.title}</b></span>
               <div className="card-image">
                  <img src={item.img} alt={item.title}/>                  
               </div>

               <div className="card-content">
                  <p>{item.desc}</p>
                  <p><b>Price: {item.price}</b></p>                  
               </div>
               <div className="card-action">
                  <Button className="button" color="secondary">Add to Cart</Button>
               </div>
            </div>            
         )
      })
      return (
         <div className="container">
            <h3 className="center">Items For Sale</h3>
            <div className="box">
               {itemList}
            </div>
         </div>         
      )
   }
}  

const mapStateToItems = (state) => {
   return {
      items : state.items
   }
}

export default connect(mapStateToItems)(Home) 
