class ProductService {
    url = 'https://fakestoreapi.com'

    findProductById(id){
        return fetch(`${this.url}/products/${id}`)
            .then(value => value.json())
    }

    async products() {
        return fetch(`${this.url}/products`)
            .then(value => value.json())
    }
}

export default ProductService