import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import callApi from './../../utils/apiCaller';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        };
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        var {txtName, txtPrice, chkbStatus} = this.state;
        callApi('products', 'POST', {
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }).then(res => {
            console.log(res);
        })
    }
    
    render() {
        var {txtName, txtPrice, chkbStatus} = this.state;
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label for="">Tên sản phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="">Giá sản phẩm</label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="">Trạng thái</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange}
                            />
                            Còn hàng
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu lại </button>
                </form>
            </div>
        )
    }
}

export default ProductActionPage;
