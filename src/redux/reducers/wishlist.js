import {ADD_PRODUCT_TO_WISHLIST} from "../action-types";

const initialState = {
    wishlist: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_WISHLIST: {
            let productsToAdd = state.wishlist.filter(product => product.id !== action.payload.id)
            if (productsToAdd.length === state.wishlist.length) {
                productsToAdd.push(action.payload)
            }
            return {...state, wishlist: productsToAdd}
        }
        default: {
            return state
        }
    }
}