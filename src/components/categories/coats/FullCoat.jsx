import React, {Component} from 'react'

import ProductService from "../../../services/ProductService";

class FullCoat extends Component{
    state = {product: null}
    productService = new ProductService()
    componentDidMount() {
        const{id} =this.props

        setTimeout(()=>{
            this
                .productService
                .findProductById(id)
                .then(product => this.setState({user: product}))
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
    // return <div className={classes.content}>
    //     <h3 className={classes.title}>Coat</h3>
    // </div>


export default FullCoat