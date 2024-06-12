import React,{useState} from "react";

const ShoeContext  = React.createContext({
    shoe: [],
    cartShoe: [],
    addShoeHandler: () => {},
    decreaseDataHandler: () => {},
    setShoe: () => {},
    setCartShoe: () => {},});
    
export const ShoeProvider = (props) => {
    const [shoe, setShoe] = useState([]);
    const [cartShoe, setCartShoe] = useState([]);

    const addShoeHandler = (item) => {
        setShoe((prevShoes) => [...prevShoes, item]);
    };

    const decreaseDataHandler = (data, size) => {
        const updatedShoe = shoe.map((item) => {
            if (item.shoeName === data.shoeName) {
                if (item.sizes[size] !== undefined) {
                    item.sizes[size]--;
                }
            }
            return item;
        });
        setShoe(updatedShoe);
        updateCart(data.shoeName, size);
    };

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
                                [size]: (shoe.sizes[size] || 0) + 1,
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

    return (
        <ShoeContext.Provider value={{ shoe, cartShoe, addShoeHandler, decreaseDataHandler, setShoe, setCartShoe }}>
            {props.children}
        </ShoeContext.Provider>
    );
};

export default ShoeContext;


