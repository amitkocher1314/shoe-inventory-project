import ShoeForm from "./components/ShoeForm/ShoeForm";
import CartButton from "./components/Cart/CartButton";
import DisplayForm from "./components/DisplayShoeData/DisplayForm";
import CartForm from "./components/Cart/CartForm";
import {ShoeProvider} from "./components/Store/cart-context";
import React, { useState } from "react";


function App() {

   
  const [isValidCart,setIsValidCart] = useState(false);
   const closeHandler = ()=>{
    setIsValidCart(false)
   } 
   const openHandler = () =>{
    setIsValidCart(true)
   }

 
  
    return(
    <ShoeProvider>
     <ShoeForm /> 
     <CartButton onOpen = {openHandler}/>
     <DisplayForm />
     {isValidCart&&<CartForm  onClose={closeHandler}  />}
     
    </ShoeProvider>
  )
}

export default App;
