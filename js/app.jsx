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
                        <div className="col-12" id="logo">
                            <h1>Jakub Wyczesany Portfolio</h1>
                            <img id="grumpy" src="./../images/grumpy.png"/>
                        </div>
                    </div>
                </header>
            )
        }
    }

    class Home extends React.Component {
        render() {
            return (
                <section className="grid space">
                    <div className="row">
                        <div className="col-9" id="mainSection">
                            <p>
                                WITAJ NA MOIM PORTFOLIO, TUTAJ ZNAJDUJĄ SIĘ WSZYSTKIE INFORMACJE O MNIE ORAZ O PRACACH KTÓRE DOTYCHCZAS WYKONAŁEM :)
                            </p>
                        </div>
                        <Menu />
                    </div>
                </section>
            )
        }
    }

    class Projects extends React.Component {
        render() {
            return (
                <section className="grid space">
                    <div className="row">
                        <div className="col-9" id="mainSection">
                            <p>
                                W PRZYSZŁOŚCI TUTAJ ZNAJDĄ SIĘ MOJE WSZYSTKIE PROJEKTY
                            </p>
                        </div>
                        <Menu />
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
                        <div className="col-9" id="mainSection">
                            <p>
                                W TYM SEGMENCIE DOWIESZ SIĘ WIECEJ O MNIE. KIM JESTEM I CZYM SIĘ ZAJMUJĘ
                            </p>
                        </div>
                        <Menu />
                    </div>
                </section>
            )
        }
    }

    class Contact extends React.Component {
        render() {
            return (
                <section className="grid space">
                    <div className="row">
                        <div className="col-9" id="mainSection">
                            <p>
                                W TYM MIEJSCU DOSTĘPNE BĘDĄ INFORMACJE NA TEMAT W JAKI SPOSÓB SIĘ ZE MNĄ SKONTAKTOWAĆ
                            </p>
                        </div>
                        <Menu />
                    </div>
                </section>
            )
        }
    }

    class Menu extends React.Component {
        render() {
            return (
                <div className="col-3" id="rightBox">
                    <div className="menu"><p><Link to="/">HOME</Link></p></div>
                    <div className="menu"><p><Link to="/aboutme">O MNIE</Link></p></div>
                    <div className="menu"><p><Link to="/projects">PROJEKTY</Link></p></div>
                    <div className="menu"><p><Link to="/contact">KONTAKT</Link></p></div>
                </div>
            )
        }
    }

    class Footer extends React.Component {
        render() {
            return (
                <footer className="grid space">
                    <div className="row">
                        <div className="col-12" id="footer"></div>
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
        render() {
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