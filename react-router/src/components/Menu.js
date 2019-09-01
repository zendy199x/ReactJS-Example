import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const MenuLink =({ label, to, actionOnlyWhenExact }) => {
    return (
        <Route path={to} exact={actionOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active abc' : '';
            return (
                <li className={`my-li ${active}`}>
                    <Link to={to} className="my-link">
                        {label}
                    </Link>
                </li>
            )
        }} />
    )
}

class Menu extends Component {
    render() {
        return(
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <MenuLink label="Trang chủ" to="/" actionOnlyWhenExact={true}>Trang chủ</MenuLink>
                    <MenuLink label="Giới thiệu" to="/about" actionOnlyWhenExact={false}>Trang chủ</MenuLink>
                    <MenuLink label="Liên hệ" to="/contact" actionOnlyWhenExact={false}>Trang chủ</MenuLink>
                </ul>
            </nav>
)
    }
}

export default Menu;