import React from "react";

class Contact extends React.Component {
    state = {
        hover: false,
    };

    handleMouseClick() {
        if (this.state.hover === false) {
            this.setState({hover: true})
        } else {
            this.setState({hover: false})
        }
    }

    render() {

        const tooltipStyle = {
            display: this.state.hover ? 'block' : 'none'
        };

        return (
            <section className="grid space">
                <div className="row">
                    <div className="col-12" id="mainSection">
                        <a href="https://github.com/tafarian/" target="_blank">
                            <i className="fab fa-github" style={{fontSize: "45px", color: "black"}}></i>
                        </a>
                        <a href="https://www.linkedin.com/in/jakub-wyczesany-085562157/" target="_blank">
                            <i className="fab fa-linkedin" style={{fontSize: "45px", color: "black"}}></i>
                        </a>
                        <i onClick={this.handleMouseClick.bind(this)}
                           className="fas fa-at"
                           style={{fontSize: "45px", color: "black"}}></i>
                        <div className="mailTooltip" style={tooltipStyle}>ghaelios@gmail.com</div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact