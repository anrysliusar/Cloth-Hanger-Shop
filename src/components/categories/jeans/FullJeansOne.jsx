import React, {Component} from 'react'

import ProductService from "../../../services/ProductService";

class FullJeansOne extends Component{
    state = {product: null}
    productService = new ProductService()
    componentDidMount() {
        const{id} =this.props

        setTimeout(()=>{
            this
                .productService
                .findProductById(id)
                .then(product => this.setState({product: product}))
        },2000)
    }

    render() {
        const {product} = this.state;
        console.log(product);
        return (
            <div>
                {
                    product
                        ? <div>{`${product.title} --- ${product.id} --- ${product.description} `}</div>
                        : <h1> LOADING...</h1>
                }
            </div>
        );
    }
}



export default FullJeansOne