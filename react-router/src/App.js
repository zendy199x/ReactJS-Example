import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const MenuLink =({ label, to, actionOnlyWhenExact }) => {
    return (
        <Route path={to} exact={actionOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active abc' : '';
            return (
                <li className={active}>
                    <Link to={to} className="my-link">
                        {label}
                    </Link>
                </li>
            )
        }} />
    )
}

class App extends Component {
    render() {
        return(
            <Router>
                <div className="App">
                {/* Menu */}
                    <nav className="navbar navbar-default">
                        <ul className="nav navbar-nav">
                            <MenuLink label="Trang chủ" to="/" actionOnlyWhenExact={true}>Trang chủ</MenuLink>
                            <MenuLink label="Giới thiệu" to="/about" actionOnlyWhenExact={false}>Trang chủ</MenuLink>
                            <MenuLink label="Liên hệ" to="/contact" actionOnlyWhenExact={false}>Trang chủ</MenuLink>
                        </ul>
                    </nav>
                {/* Nội dung */}
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                </div>
            </Router>
        )
    }
}

export default App;
