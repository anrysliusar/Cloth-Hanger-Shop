import {productService,ProductService} from "../../services/ProductService";
import {
    ADD_PRODUCT_TO_CART,
    ADD_PRODUCT_TO_WISHLIST,
    SET_PRODUCTS
} from "../action-types";


// export const setProducts = () => async (dispatch) => {
//     const productService = new ProductService()
//     const request = await productService.getProducts()
//     const json = await request.json()
//     dispatch({type: SET_PRODUCTS, payload: json})
// }

// МОЖНО ЩЕ ТАК
export const setProducts = () => (dispatch) => {
    productService
        .getProducts()
        .then(response => response.json())
        .then(products => dispatch({type: SET_PRODUCTS, payload: products}))
        .catch(error => console.warn(error))
}

export const addProductWishlist = (payload) => ({type: ADD_PRODUCT_TO_WISHLIST, payload})
export const addProductCart = (payload) => ({type: ADD_PRODUCT_TO_CART, payload})
