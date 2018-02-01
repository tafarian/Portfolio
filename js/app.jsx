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
                            <p>Witaj</p>
                        </div>
                    </div>
                </section>
            )
        }
    }

    class Projects extends React.Component {
        state = {
            slideCount: 1,
            hoverSit: false,
            hoverFurry: false,
            hoverMovie: false,
            hoverToDo: false,
        };

        handleClickPrev = () => {
            this.setState({
                slideCount: this.state.slideCount - 1
            });
            if (this.state.slideCount <= 1) {
                this.setState({
                    slideCount: 4
                })
            }
        };

        handleClickNext = () => {
            this.setState({
                slideCount: this.state.slideCount + 1
            });
            if (this.state.slideCount > 3) {
                this.setState({
                    slideCount: 1
                })
            }
        };

        handleMouseClickSit() {
            if (this.state.hoverSit === false) {
                this.setState({hoverSit: true})
            } else {
                this.setState({hoverSit: false})
            }
        }

        handleMouseClickFurry() {
            if (this.state.hoverFurry === false) {
                this.setState({hoverFurry: true})
            } else {
                this.setState({hoverFurry: false})
            }
        }

        handleMouseClickMovie() {
            if (this.state.hoverMovie === false) {
                this.setState({hoverMovie: true})
            } else {
                this.setState({hoverMovie: false})
            }
        }

        handleMouseClickToDo() {
            if (this.state.hoverToDo === false) {
                this.setState({hoverToDo: true})
            } else {
                this.setState({hoverToDo: false})
            }
        }

        render() {

            const sitOnTooltip = {
                display: this.state.hoverSit ? 'block' : 'none'
            };

            const furryTooltip = {
                display: this.state.hoverFurry ? 'block' : 'none'
            };

            const movieTooltip = {
                display: this.state.hoverMovie ? 'block' : 'none'
            };

            const toDoTooltip = {
                display: this.state.hoverToDo ? 'block' : 'none'
            };

            return (
                <section className="grid space">
                    <div className="row">
                        <div className="col-12" id="projects">
                            <i className="fas fa-angle-double-left arrowPrev"
                               onClick={this.handleClickPrev}></i>
                            <div className="slider">
                                { this.state.slideCount === 1 ?
                                    <div onMouseEnter={this.handleMouseClickSit.bind(this)}
                                         onMouseLeave={this.handleMouseClickSit.bind(this)}>
                                        <a href="https://tafarian.github.io/Sit-on-chair-project"
                                           target="_blank">
                                            SIT ON CHAIR
                                        </a>
                                    </div> :
                                    null }
                                <div className="projectTooltip" style={sitOnTooltip}>HTML / CSS / JAVASCRIPT</div>
                                { this.state.slideCount === 2 ?
                                    <div onMouseEnter={this.handleMouseClickFurry.bind(this)}
                                         onMouseLeave={this.handleMouseClickFurry.bind(this)}>
                                        <a href="https://tafarian.github.io/Furry-game"
                                           target="_blank">
                                            FURRY GAME
                                        </a>
                                    </div> :
                                    null }
                                <div className="projectTooltip" style={furryTooltip}>HTML / CSS / JAVASCRIPT</div>
                                { this.state.slideCount === 3 ?
                                    <div onMouseEnter={this.handleMouseClickMovie.bind(this)}
                                         onMouseLeave={this.handleMouseClickMovie.bind(this)}>
                                        <a href="https://tafarian.github.io/Movie-finder-app/"
                                           target="_blank">
                                            MOVIE FINDER
                                        </a>
                                    </div> :
                                    null }
                                <div className="projectTooltip" style={movieTooltip}>HTML / SASS / JAVASCRIPT / REACT</div>
                                { this.state.slideCount === 4 ?
                                    <div onMouseEnter={this.handleMouseClickToDo.bind(this)}
                                         onMouseLeave={this.handleMouseClickToDo.bind(this)}>
                                        <a href="https://tafarian.github.io/ToDo-React/"
                                           target="_blank">
                                            Simple To Do List
                                        </a>
                                    </div> :
                                    null }
                                <div className="projectTooltip" style={toDoTooltip}>HTML / SASS / REACT</div>
                            </div>

                            <i className="fas fa-angle-double-right arrowNext"
                               onClick={this.handleClickNext}></i>
                        </div>
                    </div>
                </section>
            )
        }
    }

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
                }), 2500);
        }

        render() {

            if(this.state.loading === true) {
                return (
                    <div id="preloader">
                        <div id="loader"></div>
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