import React from "react";

class AboutMe extends React.Component {
    state = {
        source: null,
    };

    handleClick = (e) => {
        this.setState ({
            source: e.target.src,
        });
    };

    handleDelete = (e) => {
        this.setState ({
            source: null,
        });
    };

    render() {
        let full = null;
        if (this.state.source !== null) {
            full = (
                <div className="fullScreen" >
                    <img onClick={this.handleDelete} src={this.state.source} />
                </div>
            )
        }
        return (
            <section className="grid space">
                <div className="row">
                    <div className="col-12" id="aboutme">
                        <img className="small" src="http://imgie.pl/images/2018/01/25/HTMLHTMLJavascriptPHPSQLUNIXScripting4b148.png" onClick={ this.handleClick }></img>
                        { full }
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutMe