export class ProductService {
    url = 'https://fakestoreapi.com'

    async getProducts() {
        return fetch(`${this.url}/products`)

    }
}

