import ShoeForm from "./components/ShoeForm/ShoeForm";
import CartButton from "./components/Cart/CartButton";
import DisplayForm from "./components/DisplayShoeData/DisplayForm";
import CartForm from "./components/Cart/CartForm";
import React, {Fragment} from "react";

import { useState } from "react";
function App(props) {

  const [isValidCart,setIsValidCart] = useState(false);
   const closeHandler = ()=>{
    setIsValidCart(false)
   } 
   const openHandler = () =>{
    setIsValidCart(true)
   }

   const[shoe,setShoe] = useState([]);
   const [cartShoe, setCartShoe] = useState([]);
   

   const addShoeHandler = (item) => {
    setShoe((prevShoes) => [...prevShoes, item]);
}; 
   
   const decreaseDataHandler = (data,size)=>{
     


   const updatedShoe  = shoe.map((item)=>{
       if (item.shoeName === data.shoeName ){
          if(item.sizes[size] !==undefined){
            item.sizes[size]--
          }  
        }
        return item
      });
      setShoe(updatedShoe);
      updateCart(data.shoeName, size);
   }
   const updateCart = (shoeName, size) => {
    const existingShoe = cartShoe.find((shoe) => shoe.shoeName === shoeName);
    if (existingShoe) {
      setCartShoe(
        cartShoe.map((shoe) =>
          shoe.shoeName === shoeName
            ? {
                ...shoe,
                sizes: {
                  ...shoe.sizes,
                  [size]: (shoe.sizes[size] || 0 ) + 1,
                },
              }
            : shoe
        )
      );
    } else {
      const shoeToUpdate = shoe.find((shoe) => shoe.shoeName === shoeName);
      setCartShoe([
        ...cartShoe,
        {
          shoeName,
          price: shoeToUpdate.price,
          sizes: {
            [size]: 1,
          },
        },
      ]);
    }
  };
 
  
    return(
    <Fragment>
     <ShoeForm onAddShoe = {addShoeHandler} /> 
     <CartButton onOpen = {openHandler} cartShoe={cartShoe}/>
     <DisplayForm shoeData={shoe} onDecreaseQuantity={decreaseDataHandler} />
     {isValidCart&&<CartForm  onClose={closeHandler} cartShoe={cartShoe} />}
     
    </Fragment>
  )
}

export default App;
