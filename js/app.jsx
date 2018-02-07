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
} from 'react-router-dom';
import Template from './Template.jsx'
import Projects from './Projects.jsx'
import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx'
import Contact from './Contact.jsx'

document.addEventListener('DOMContentLoaded', function(){

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