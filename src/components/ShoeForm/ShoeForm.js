import React, {Fragment,useState} from "react";
import styles from "./ShoeForm.module.css";

const ShoeForm = (props) => {
  const [shoeName, setShoeName] = useState('');
  const [shoeDescription, setShoeDescription] = useState('');
  const [price, setPrice] = useState('');
  const [sizeL, setSizeL] = useState('');
  const [sizeM, setSizeM] = useState('');
  const [sizeS, setSizeS] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
 
    // ES6 introduced a shorthand for object properties. When the key and variable name are the same, you can omit the value:
    const items = {
        shoeName,
        shoeDescription,
        price,
        sizes: {
            L: sizeL,
            M: sizeM,
            S: sizeS
        }
    };

    props.onAddShoe(items);

    // Clear the form
    setShoeName('');
    setShoeDescription('');
    setPrice('');
    setSizeL('');
    setSizeM('');
    setSizeS('');
};


return(
    <Fragment>
       
   <form  className={styles.form} onSubmit={submitHandler} >
           
            <label htmlFor="shoe-name">Name:</label>
            <input type="text" required value={shoeName} onChange={(e)=>setShoeName(e.target.value)} id="shoe-name" />
            
            <label htmlFor="shoe-des">Description:</label>
            <input type="text" required id="shoe-des"  value={shoeDescription} onChange={(e)=>setShoeDescription(e.target.value)}/>
            
            <label htmlFor="price">Price:</label>
            <input type="number" required id="price"  value={price} onChange={(e)=>setPrice(e.target.value)}/>
            
            <label htmlFor="quantity">Quantity Available:
            <label htmlFor="quantity-L">L</label>
            <input className={styles.SizeInput} required type="number" id="quantity-L"  value={sizeL} onChange={(e)=>setSizeL(e.target.value)} />
                <label htmlFor="quantity-M">M</label>
                 <input className={styles.SizeInput} required type="number" id="quantity-M"  value={sizeM} onChange={(e)=>setSizeM(e.target.value)}/>
                      <label htmlFor="quantity-S">S</label>
                       <input className={styles.SizeInput} required type="number" id="quantity-S"  value={sizeS} onChange={(e)=>setSizeS(e.target.value)}/>
              </label>
        <button  type="submit">Add Shoe</button>
    </form>
    
</Fragment>)
}
export default ShoeForm