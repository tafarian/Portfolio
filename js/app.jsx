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
                            <h1>PORTFOLIO</h1>
                            <img id="lion" src="./../images/lion.jpg"/>
                        </div>
                    </div>
                </header>
            )
        }
    }

    class Section extends React.Component {
        render() {
            return (
                <section className="grid space">
                    <div className="row">
                        <div className="col-3" id="leftBox"></div>
                        <div className="col-6" id="mainSection"></div>
                        <div className="col-3" id="rightBox"></div>
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
                        <div className="col-12" id="footer"></div>
                    </div>
                </footer>
            )
        }
    }

    class Home extends React.Component {
        render() {
            return (
                <div>
                    <Header />
                    <Section />
                    <Footer />
                </div>
            )
        }
    }



    class App extends React.Component {
        render() {
            return <Home />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});