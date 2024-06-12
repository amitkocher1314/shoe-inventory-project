import React, {useContext} from "react";
import CartIcon from "./CartIcon";
import styles from "./CartButton.module.css";
import ShoeContext from "../Store/cart-context";
const CartButton = (props) => {
   const {cartShoe} = useContext(ShoeContext)

    // const countUniqueItems = () => {
    //     const uniqueItems = new Set();
    //     cartShoe.forEach((shoe) => uniqueItems.add(shoe.shoeName));
    //     return uniqueItems.size;
    // };

   
    return (
        <button className={styles.cartButton} onClick={props.onOpen}>
            <span>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span>
             {cartShoe.length}   
            {/* {countUniqueItems()} */}
            </span>
        </button>
    );
}

export default CartButton;
