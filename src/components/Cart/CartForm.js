import React, {useContext} from "react";
import Modal from "../UI/Modal";
import ShoeContext from "../Store/cart-context";
import styles from "./CartForm.module.css"

const CartForm = (props) => {

const { cartShoe, setCartShoe } = useContext(ShoeContext);

const calculateTotalPrice = () => {
    return cartShoe.reduce((total, shoe) => {
        const shoeTotal = Object.entries(shoe.sizes).reduce((subTotal, [size, quantity]) => {
            return subTotal + (quantity * shoe.price);
        }, 0);
        return total + shoeTotal;
    }, 0);
};



const removeItemHandler = (shoeName, size) => {
    const updatedCart = cartShoe.map((shoe) => {
        if (shoe.shoeName === shoeName) {
            const updatedSizes = { ...shoe.sizes };
            if (updatedSizes[size] > 1) {
                updatedSizes[size]--;
            } else {
                delete updatedSizes[size];
            }
            return { ...shoe, sizes: updatedSizes };
        }
        return shoe;
    }).filter((shoe) => Object.keys(shoe.sizes).length > 0);
    setCartShoe(updatedCart);
};

return (
    <Modal onClick={props.onClose}>
    <div className={styles.cartForm}>
        {cartShoe.map((shoe, index) => (
            <div key={index} className={styles.cartItem}>
                <h2 className={styles.shoeName}>{shoe.shoeName}</h2>
                <p className={styles.price}>Price: Rs {shoe.price}</p>
                <div className={styles.sizes}>
                    <p>Sizes:</p>
                    <ul className={styles.sizeList}>
                        {Object.entries(shoe.sizes).map(([size, quantity]) => (
                            <li key={size} className={styles.sizeItem}>
                                {size}: {quantity} <button className={styles.removeButton} onClick={() => removeItemHandler(shoe.shoeName, size)}>x</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
        <h2 className={styles.totalPrice}>Total Price: Rs {calculateTotalPrice()}</h2>
        <div className={styles.actions}>
            <button className={styles.cancelButton} onClick={props.onClose}>Cancel</button>
        </div>
    </div>
</Modal>
);
};

export default CartForm;
