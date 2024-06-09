import React from "react";
import Modal from "../UI/Modal";

const CartForm = (props) => {
    const calculateTotalPrice = () => {
        return props.cartShoe.reduce((total, shoe) => {
            const shoeTotal = Object.entries(shoe.sizes).reduce((subTotal, [size, quantity]) => {
                return subTotal + (quantity * shoe.price);
            }, 0);
            return total + shoeTotal;
        }, 0);
    };


    

   //console.log(props.onCartAdd)
    return (
        <Modal onClick={props.onClose}>
             
             {props.cartShoe.map((shoe, index) => (
                        <div key={index}>
                            <h2>{shoe.shoeName}</h2>
                            <p>Price: ${shoe.price}</p>
                            <p>Sizes:</p>
                            <ul>
                                {Object.entries(shoe.sizes).map(([size, quantity]) => (
                                    <li key={size}>
                                    {size}: {quantity}
                                   
                                </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <h2>Total Price: ${calculateTotalPrice()}</h2>
                    <button onClick={props.onClose} >Cancel</button>
        </Modal>
    );
};

export default CartForm;
