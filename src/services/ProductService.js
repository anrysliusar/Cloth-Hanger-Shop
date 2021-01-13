export class ProductService {
    url = 'https://fakestoreapi.com'

    getProducts() {
        return fetch(`${this.url}/products`)

    }
}

export const productService = new ProductService()
