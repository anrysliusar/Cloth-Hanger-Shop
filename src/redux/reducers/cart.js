import '../action-types'
import {ADD_PRODUCT_TO_CART} from "../action-types";

const initialState = {
    cart: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            let productsToAdd = state.cart.filter(product => product.id !== action.payload.id)
            if (productsToAdd.length === state.cart.length) {

                productsToAdd.push(action.payload)
            }
            return {...state, cart: productsToAdd}
        }
        default: {
            return state
        }
    }
}