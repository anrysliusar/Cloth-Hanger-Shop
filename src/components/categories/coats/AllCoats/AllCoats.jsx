import React, {Component} from 'react';
import ProductServices from "../../../services/ProductService";
import Coat from "./Coat";
import classes from './AllCoat.module.css'


class AllCoats extends Component {

    ProductService = new ProductServices()
    state = {products: []}

    async componentDidMount() {
        let products = await this.ProductService.products()
        this.setState({products: products})
    }

    render() {
        let {products} = this.state
        return (
            <div>
                <h3>Coats</h3>

                <div className={classes.listItems}>
                {
                    products.map(product => <Coat
                        product={product}
                        key={product.id}/>)
                }
                </div>

                <hr/>
            </div>
        );
    }
}

export default AllCoats