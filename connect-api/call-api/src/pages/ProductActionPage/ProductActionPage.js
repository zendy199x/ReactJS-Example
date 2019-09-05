import React, { Component } from 'react';
// import ProductList from './../../components/ProductList/ProductList';
// import ProductItem from './../../components/ProductItem/ProductItem';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom'

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

    componentDidMount() {
        var  { match } = this.props;
        if(match) {
            var id = match.params.id;
            callApi(`products/${id}`, 'GET', null).then(res => {
                var data = res.data
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkbStatus: data.status
                })
            })
        }
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
        var {id, txtName, txtPrice, chkbStatus} = this.state;
        var {history} = this.props;
        if(id) {
            //http://localhost:3000/products/:id => HTTP METHOD: PUT
            callApi(`products/${id}`, 'PUT', {
            name: txtName,
            price: txtPrice,
            status: chkbStatus
            }).then(res => {
                history.goBack();
            })
        } else {
            callApi('products', 'POST', {
            name: txtName,
            price: txtPrice,
            status: chkbStatus
            }).then(res => {
                history.goBack(); //quay lại trang trước đó
                // history.push("/"); đi tới trang nào 
            })
        }
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
                                checked={chkbStatus}
                            />
                            Còn hàng
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary mr-10">
                        Lưu lại
                    </button>
                    <Link to="/product-list" className="btn btn-danger">
                        Trở lại
                    </Link>
                </form>
            </div>
        )
    }
}

export default ProductActionPage;
