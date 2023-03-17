import React, { createContext, useReducer } from 'react';
import cartReducer from './cartReducer';


/* Cart Context */
const cartContext = createContext();


/* Initial State */
const initialState = {
    isCartOpen: false,
    cartItems: []
};


/* Cart-Provider Component */
const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);


    /* Dispatched Actions */

    const toggleCart = (toggle) => {
        return dispatch({
            type: 'TOGGLE_CART',
            payload: {
                toggle
            }
        });
    };
    
    const addItem = (item) => {
        return dispatch({
            type: 'ADD_TO_CART',
            payload: {
                item
            }
        });
    };

    const removeItem = (itemId) => {
        return dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                itemId
            }
        });
    };


    const clearCart = () => {
        return dispatch({
            type: 'CLEAR_CART'
        });
    };


    // Context values
    const values = {
        ...state,
        toggleCart,
        addItem,
        removeItem,
        //incrementItem,
        //decrementItem,
        clearCart
    };


    return (
        <cartContext.Provider value={values}>
            {children}
        </cartContext.Provider>
    );

};


export default cartContext;
export { CartProvider };