import React from "react";

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

export default Projects