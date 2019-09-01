import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Products extends Component {
    render() {
        var products = [
            {
                id: 1,
                name: 'iPhone X',
                price: 35000000
            },
            {
                id: 2,
                name: 'iPhone XS Max',
                price: 40000000
            },
            {
                id: 3,
                name: 'iPhone 11',
                price: 45000000
            }
        ];

        var { match } = this.props;
        console.log(match);

        var result = products.map((product, index) => {
            return (
                <NavLink to="" key={index}>
                    <li className="list-group-item" >
                        { product.id } - { product.name } - { product.price }
                    </li>
                </NavLink>
            )
        })

        return(
            <div className="container">
                <h1>Danh sách sản phẩm</h1>
                    <ul className="list-group">
                        { result }
                    </ul>
                <div className="row">
                    
                </div>
            </div>
        )
    }
}

export default Products;