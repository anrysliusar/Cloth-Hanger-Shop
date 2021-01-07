import React, {Component} from 'react';
import ProductServices from "../../../services/ProductService";


import {
    Route
} from 'react-router-dom'
import FullShirt from "./FullJeansOne";
import JeansOne from "./JeansOne";

class AllShirts extends Component {

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
                <h3>Jeans</h3>

                {
                    products.map(product => <JeansOne product={product} key={product.id}/>)
                }
                <hr/>
                <div>
                    <Route path={`${url}/:id`} render={(props) => {

                        let {match: {params: {id}}} = props

                        return <FullShirt key={id} id={id}/>
                    }}/>
                </div>
            </div>
        );
    }
}

export default AllShirts