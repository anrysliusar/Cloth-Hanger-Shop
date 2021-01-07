import React, {Component} from 'react';
import ProductServices from "../../../services/ProductService";

import {
    Route
} from 'react-router-dom'
import FullShoe from "./FullShoe";
import Shoe from "./Shoe";

class AllShoes extends Component {

    ProductService = new ProductServices()
    state = {products: []}

    async componentDidMount() {
        let products = await this.ProductService.products()
        this.setState({products: products})
    }

    render() {
        let {products} = this.state
        let {match: {url}} = this.props
        return (
            <div>
                <h3>Shoes</h3>

                {
                    products.map(product => <Shoe product={product} key={product.id}/>)
                }
                <hr/>
                <div>
                    <Route path={`${url}/:id`} render={(props) => {

                        let {match: {params: {id}}} = props

                        return <FullShoe key={id} id={id}/>
                    }}/>
                </div>
            </div>
        );
    }
}

export default AllShoes