import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return(
            <tr>
                <td>1</td>
                <td>1</td>
                <td>iphone</td>
                <td>500</td>
                <td>
                    <span class="label label-warning">
                        Còn hàng
                    </span>
                </td>
                <td>
                    <button type="button" class="btn btn-success mr-10">
                        Sửa
                    </button>
                    <button type="button" class="btn btn-danger">
                        Xoá
                    </button>
                </td>
            </tr>
        )
    }
}

export default ProductItem;
