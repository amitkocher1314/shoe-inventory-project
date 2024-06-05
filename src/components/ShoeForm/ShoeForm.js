import React, {Fragment} from "react";
import styles from "./ShoeForm.module.css";
import CartButton from "../Cart/CartButton";

const ShoeForm = () => {
return(
    <Fragment>
       
   <form  className={styles.form} >
           
            <label htmlFor="shoe-name">Name:</label>
            <input type="text" id="shoe-name" />
            <label htmlFor="shoe-des">Description:</label>
            <input type="text" id="shoe-des" />
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" />
          <label htmlFor="quantity">Quantity Available:
            <label htmlFor="quantity-L">L</label>
              <input className={styles.SizeInput} type="number" id="quantity-L" />
             <label htmlFor="quantity-M">M</label>
              <input className={styles.SizeInput} type="number" id="quantity-M" />
            <label htmlFor="quantity-S">S</label>
              <input className={styles.SizeInput} type="number" id="quantity-S" />
              </label>
        <button  type="submit">Add Shoe</button>
    </form>
    <CartButton />
</Fragment>)
}
export default ShoeForm