import React from 'react';
import ReactDOM from 'react-dom';
import './../css/style.scss';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

document.addEventListener('DOMContentLoaded', function(){

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

    class Home extends React.Component {
        render() {
            return (
                <section className="grid space">
                    <div className="row">
                        <div className="col-12" id="home">
                            <img style={{width: "250px", height: "250px", margin: "0 auto", display: "block"}} src="./../images/undercon.png"></img>
                        </div>
                    </div>
                </section>
            )
        }
    }

    class Projects extends React.Component {
        state = {
            slideCount: 1
        };

        handleClickPrev = () => {
            this.setState({
                slideCount: this.state.slideCount - 1
            })
            if (this.state.slideCount <= 1) {
                this.setState({
                    slideCount: 3
                })
            }
        };

        handleClickNext = () => {
            this.setState({
                slideCount: this.state.slideCount + 1
            })
            if (this.state.slideCount > 2) {
                this.setState({
                    slideCount: 1
                })
            }
        };


        render() {
            return (
                <section className="grid space">
                    <div className="row">
                        <div className="col-12" id="mainSection">
                            <div className="arrows prev"
                                 onClick={this.handleClickPrev}></div>
                            <div className="boxRow slider">
                                { this.state.slideCount === 1 ?
                                    <div>
                                        <a href="https://tafarian.github.io/Sit-on-chair-project" target="_blank"><img src="./../images/sitonchair.png"/>
                                        </a>
                                    </div> :
                                    null }
                                { this.state.slideCount === 2 ?
                                    <div>
                                        <a href="https://tafarian.github.io/Furry-game" target="_blank"><img src="./../images/furrygame.png"/>
                                        </a>
                                    </div> :
                                    null }
                                { this.state.slideCount === 3 ?
                                    <div>
                                        <a href="https://tafarian.github.io/Movie-finder-app/" target="_blank"><img src="./../images/mfa.png"/>
                                        </a>
                                    </div> :
                                    null }
                            </div>
                            <div className="arrows next"
                                 onClick={this.handleClickNext}></div>
                        </div>
                    </div>
                </section>
            )
        }
    }

    class AboutMe extends React.Component {
        render() {
            return (
                <section className="grid space">
                    <div className="row">
                        <div className="col-12" id="aboutme">
                            <a href="http://imgie.pl/images/2018/01/25/HTMLHTMLJavascriptPHPSQLUNIXScripting4b148.png" target="_blank">
                                <img src="/./../images/cv.png"></img>
                            </a>
                        </div>
                    </div>
                </section>
            )
        }
    }

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

    class Footer extends React.Component {
        render() {
            return (
                <footer className="grid space">
                    <div className="row">
                        <div className="col-12" id="footer">
                            <p>&#174; Jakub Wyczesany 2018</p>
                        </div>
                    </div>
                </footer>
            )
        }
    }

    class Template extends React.Component {
        render() {
            return (
                <div>
                    <Header />
                    { this.props.children }
                    <Footer />
                </div>
            )
        }
    }

    class App extends React.Component {
        state = {
            loading: true,
        };

        componentDidMount() {
            setTimeout(() =>
                this.setState({
                    loading: false
                }), 1000);
        }

        render() {

            if(this.state.loading === true) {
                return (
                    <div className="loader">
                        <div id="shadow"></div>
                        <div id="box"></div>
                    </div>
                )
            }

            return(
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Home} />
                        <Route path='/aboutme' component={AboutMe} />
                        <Route path='/projects' component={Projects} />
                        <Route path='/contact' component={Contact} />
                    </Route>
                </Router>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});