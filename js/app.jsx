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
                            <h1>Portfolio</h1>
                            <img id="grumpy" src="./../images/grumpy2.png"/>
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
                            <p className="mainText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lectus ex, a pellentesque arcu consequat in. Proin finibus luctus ipsum, a volutpat arcu auctor ut. In iaculis, nisl sit amet dictum mattis, augue lacus ornare massa, id tempor orci neque ac ligula. Cras cursus fermentum commodo. Vivamus volutpat nulla vel enim porta, vel congue augue scelerisque. In ultricies quam diam, in viverra diam posuere quis. Curabitur vel ornare ante, sed maximus eros. In interdum lacus et lectus imperdiet, eget auctor risus mollis. Donec nunc dui, vehicula in sapien vitae, viverra dignissim urna.

                                Nunc eget odio eget dui tempus hendrerit nec at sem. Ut vulputate felis et auctor volutpat. Donec vel lectus congue, rhoncus sapien in, maximus risus. Nullam ac enim dictum, mattis mauris sed, egestas nunc. Pellentesque auctor id urna faucibus fermentum. Nullam ac elementum sem. Suspendisse potenti. Morbi quam magna, molestie eget velit nec, fermentum ultrices mi.

                                Donec tortor massa, dictum nec tortor et, sollicitudin eleifend leo. Pellentesque sit amet ligula euismod mi facilisis congue. Sed consectetur dictum tortor, a interdum magna condimentum vel. Donec ut ex sit amet orci maximus ultrices. Aliquam id interdum nibh. Ut rutrum posuere congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed nibh quis quam tincidunt condimentum. Donec at augue pulvinar, commodo ligula eu, finibus augue. Mauris convallis varius nulla, eu egestas est vestibulum sit amet. Praesent pharetra efficitur libero at semper. Aenean faucibus quam lorem, quis accumsan augue faucibus efficitur.
                            </p>
                        </div>
                        <Menu />
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
        };

        handleClickNext = () => {
            this.setState({
                slideCount: this.state.slideCount + 1
            })
        };

        render() {
            if (this.state.slideCount > 3) {
                this.setState({
                    slideCount: 1
                })
            } else if (this.state.slideCount < 0 ) {
                this.setState({
                    slideCount: 3
                })
            }
            return (
                <section className="grid space">
                    <div className="row">
                        <div className="col-9" id="mainSection">
                            <div className="arrows prev"
                                 onClick={this.handleClickPrev}></div>
                            <div className="boxRow slider">
                                { this.state.slideCount === 1 ?
                                    <div className="slide">
                                        <img src="./../images/1.jpeg"/>
                                    </div> :
                                    null }
                                { this.state.slideCount === 2 ?
                                    <div className="slide">
                                        <img src="./../images/2.jpeg"/>
                                    </div> :
                                    null }
                                { this.state.slideCount === 3 ?
                                    <div className="slide">
                                        <img src="./../images/3.jpeg"/>
                                    </div> :
                                    null }
                            </div>
                            <div className="arrows next"
                                 onClick={this.handleClickNext}></div>
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
                            <p className="mainText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lectus ex, a pellentesque arcu consequat in. Proin finibus luctus ipsum, a volutpat arcu auctor ut. In iaculis, nisl sit amet dictum mattis, augue lacus ornare massa, id tempor orci neque ac ligula. Cras cursus fermentum commodo. Vivamus volutpat nulla vel enim porta, vel congue augue scelerisque. In ultricies quam diam, in viverra diam posuere quis. Curabitur vel ornare ante, sed maximus eros. In interdum lacus et lectus imperdiet, eget auctor risus mollis. Donec nunc dui, vehicula in sapien vitae, viverra dignissim urna.

                                Nunc eget odio eget dui tempus hendrerit nec at sem. Ut vulputate felis et auctor volutpat. Donec vel lectus congue, rhoncus sapien in, maximus risus. Nullam ac enim dictum, mattis mauris sed, egestas nunc. Pellentesque auctor id urna faucibus fermentum. Nullam ac elementum sem. Suspendisse potenti. Morbi quam magna, molestie eget velit nec, fermentum ultrices mi.

                                Donec tortor massa, dictum nec tortor et, sollicitudin eleifend leo. Pellentesque sit amet ligula euismod mi facilisis congue. Sed consectetur dictum tortor, a interdum magna condimentum vel. Donec ut ex sit amet orci maximus ultrices. Aliquam id interdum nibh. Ut rutrum posuere congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed nibh quis quam tincidunt condimentum. Donec at augue pulvinar, commodo ligula eu, finibus augue. Mauris convallis varius nulla, eu egestas est vestibulum sit amet. Praesent pharetra efficitur libero at semper. Aenean faucibus quam lorem, quis accumsan augue faucibus efficitur.
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
                            <p className="mainText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lectus ex, a pellentesque arcu consequat in. Proin finibus luctus ipsum, a volutpat arcu auctor ut. In iaculis, nisl sit amet dictum mattis, augue lacus ornare massa, id tempor orci neque ac ligula. Cras cursus fermentum commodo. Vivamus volutpat nulla vel enim porta, vel congue augue scelerisque. In ultricies quam diam, in viverra diam posuere quis. Curabitur vel ornare ante, sed maximus eros. In interdum lacus et lectus imperdiet, eget auctor risus mollis. Donec nunc dui, vehicula in sapien vitae, viverra dignissim urna.

                                Nunc eget odio eget dui tempus hendrerit nec at sem. Ut vulputate felis et auctor volutpat. Donec vel lectus congue, rhoncus sapien in, maximus risus. Nullam ac enim dictum, mattis mauris sed, egestas nunc. Pellentesque auctor id urna faucibus fermentum. Nullam ac elementum sem. Suspendisse potenti. Morbi quam magna, molestie eget velit nec, fermentum ultrices mi.

                                Donec tortor massa, dictum nec tortor et, sollicitudin eleifend leo. Pellentesque sit amet ligula euismod mi facilisis congue. Sed consectetur dictum tortor, a interdum magna condimentum vel. Donec ut ex sit amet orci maximus ultrices. Aliquam id interdum nibh. Ut rutrum posuere congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed nibh quis quam tincidunt condimentum. Donec at augue pulvinar, commodo ligula eu, finibus augue. Mauris convallis varius nulla, eu egestas est vestibulum sit amet. Praesent pharetra efficitur libero at semper. Aenean faucibus quam lorem, quis accumsan augue faucibus efficitur.
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
                        <div className="col-12" id="footer">
                            <img src="./../images/grumpy.png"/>
                            <p>Jakub Wyczesany 2018</p>
                        </div>
                    </div>
                </footer>
            )
        }
    }

    class Clock extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                date: new Date(),
            }
        }

        componentDidMount() {
            this.interval = setInterval( () => {
                this.setState({
                    date: new Date(),
                })
            }, 1000)
        }

        componentWillUnmount() {
            clearInterval(this.interval);
        }

        render() {
            return <div>
                <ClockTime time={this.state.date} />
            </div>
        }
    }

    class ClockTime extends React.Component {
        render() {
            return <h1 className="clock">{ this.props.time.toLocaleTimeString() }</h1>
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