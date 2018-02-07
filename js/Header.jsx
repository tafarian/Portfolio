import React from "react";
import Menu from "./Menu.jsx"

class Header extends React.Component {
    render() {
        return (
            <header className="grid">
                <div className="row">
                    <div className="col-12" id="logo"></div>
                </div>
                <Menu />
            </header>
        )
    }
}

export default Header