import React, {Component} from 'react';
import ProductServices from "../../../services/ProductService";


import {
    Route
} from 'react-router-dom'
import FullCoat from "./FullCoat";
import Coat from "./Coat";

class AllCoats extends Component {

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
                <h3>Coats</h3>

                {
                    products.map(product => <Coat product={product} key={product.id}/>)
                }
                <hr/>
                <div>
                    <Route path={`${url}/:id`} render={(props) => {

                        let {match: {params: {id}}} = props

                        return <FullCoat key={id} id={id}/>
                    }}/>
                </div>
            </div>
        );
    }
}

export default AllCoats