import '../action-types'
import {ADD_PRODUCT_TO_CART} from "../action-types";

const initialState = {
    cart: []
}

export default (state = initialState, {type,payload}) => {

    switch (type) {
        case ADD_PRODUCT_TO_CART: {

            let productsToAdd = state.cart.filter(product => product.id !== payload.id)

            if (productsToAdd.length === state.cart.length) {
                productsToAdd.push(payload)
            }

            return {...state, cart: productsToAdd}
        }
        default: {
            return state
        }
    }
}
