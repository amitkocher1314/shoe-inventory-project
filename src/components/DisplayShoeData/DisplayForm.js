import React,{useContext} from "react";
import styles from "./DisplayForm.module.css";
import Card from "../UI/Card";
import ShoeContext from "../Store/cart-context";

const DisplayForm = () => {
   const{shoe,decreaseDataHandler} = useContext(ShoeContext)
    const addCartHandler = (data, size) => {
         decreaseDataHandler(data,size)
        //props.onDecreaseQuantity(data, size);
    }

    return (
        <Card>
            <ul className={styles.ul}>
                {shoe.map((items, index) => (
                    <li key={index} className={styles.li}>
                        <div><h3>{items.shoeName}</h3></div>
                        <div><p style={{ fontStyle: "italic" }}>{items.shoeDescription}</p></div>
                        <div><p style={{ fontWeight: "bold", color: "brown" }}>{items.price}</p></div>
                        <div><button disabled={items.sizes.L <=0} className={styles.button} onClick={() => addCartHandler(items, 'L')} >L: {items.sizes.L}</button></div>
                        <div><button disabled={items.sizes.M <=0} className={styles.button} onClick={() => addCartHandler(items, 'M')}>M: {items.sizes.M}</button></div>
                        <div><button disabled={items.sizes.S <=0} className={styles.button} onClick={() => addCartHandler(items, 'S')}>S: {items.sizes.S}</button></div>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default DisplayForm;
