import React from "react";
import CartIcon from "./CartIcon";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
    const countUniqueItems = () => {
        const uniqueItems = new Set();
        props.cartShoe.forEach((shoe) => uniqueItems.add(shoe.shoeName));
        return uniqueItems.size;
    };

   
    return (
        <button className={styles.cartButton} onClick={props.onOpen}>
            <span>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span>
            {countUniqueItems()}
            </span>
        </button>
    );
}

export default CartButton;
