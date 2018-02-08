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
import Footer from './Footer.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx'
import Projects from './Projects.jsx'

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