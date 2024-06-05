import React from "react";
import CartIcon from "./CartIcon";
import styles from "./CartButton.module.css";

const CartButton = () => {
    return (
        <button className={styles.cartButton}>
            <span>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span>
                3
            </span>
        </button>
    );
}

export default CartButton;