import React from 'react';
import projects from '../fixtures/projects';
import { ProjectList } from '../components/ProjectList';
import { ProjectItem } from '../components/ProjectItem';
import { Arrow } from '../components/Arrow';
import { CSSTransitionGroup } from 'react-transition-group';

export class PortfolioPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImageIndex: 1,
            projects: 3,
        };
    
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    previousSlide = () => {
        const lastIndex = this.state.projects - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
          });
    }

    nextSlide = () => {
        const firstIndex = 0;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === this.state.projects - 1;
        const index =  shouldResetIndex ? firstIndex : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });

    }

    render() {
        return (
            <div className='carousel__container carousel--slide'> 
                <Arrow
                    direction="left"
                    clickFunction={ this.previousSlide }
                    glyph="&#9664;" 
                />
                
                <ProjectItem 
                    project={projects[this.state.currentImageIndex]}
                />
                
                <Arrow
                    direction="left"
                    clickFunction={ this.nextSlide }
                    glyph="&#9654;"
                />
            </div>
        ) 
    }
}

