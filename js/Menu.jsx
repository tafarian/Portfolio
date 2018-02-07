import React from "react";

class Menu extends React.Component {
    render() {
        return (
            <div className="row" id="rightBox">
                <div className="menu col-3"><p><Link to="/">HOME</Link></p></div>
                <div className="menu col-3"><p><Link to="/aboutme">O MNIE</Link></p></div>
                <div className="menu col-3"><p><Link to="/projects">PROJEKTY</Link></p></div>
                <div className="menu col-3"><p><Link to="/contact">KONTAKT</Link></p></div>
            </div>
        )
    }
}

export default Menu