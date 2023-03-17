const cartReducer = (state, action) => {

    switch (action.type) {

        case 'TOGGLE_CART':
            return {
                ...state,
                isCartOpen: action.payload.toggle
            };


        case 'ADD_TO_CART':
            const newItemId = action.payload.item.id;
            const itemExist = state.cartItems.some(item => item.id === newItemId);

            let updatedCartItems = null;

            if (itemExist) {
                updatedCartItems = state.cartItems.map(item => {
                    if (item.id === newItemId) {
                        return {
                            ...item,
                            quantity: item.quantity
                        };
                    }
                    return item;
                });
            } else {
                updatedCartItems = [...state.cartItems, action.payload.item];
            }

            return {
                ...state,
                cartItems: updatedCartItems
            };


        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.itemId)
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: []
            };


        default:
            return state;
    }

};

export default cartReducer;