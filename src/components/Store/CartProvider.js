import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        // Check if the item already exists in the cart with the same size
        const existingCartItemIndex = state.items.findIndex(item => (
            item.name === action.payload.name &&
            item.sizes.L === action.payload.sizes.L &&
            item.sizes.M === action.payload.sizes.M &&
            item.sizes.S === action.payload.sizes.S
        ));

        if (existingCartItemIndex !== -1) {
            // If the item exists, update the quantity
            const existingCartItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.payload.quantity
            };
            const updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;

            const updatedTotalAmount = state.totalAmount + (action.payload.price * action.payload.quantity);

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
        } else {
            // If the item does not exist, add it to the cart
            const updatedItems = state.items.concat(action.payload);
            const updatedTotalAmount = state.totalAmount + (action.payload.price * action.payload.quantity);
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
        }
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", payload: item });
    };

    const removeItemToCartHandler = () => { };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
