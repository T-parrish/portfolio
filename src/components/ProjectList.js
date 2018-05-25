import React from 'react';
import { ProjectItem } from '../components/ProjectItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



export class ProjectList extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        const projects = this.props.projects.map((project) => {
            return <ProjectItem key={project.id} {...project}/>
        });
        const {currentImageIndex} = this.props.mods

        return(
            <div className="card__container">
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={200}
                >
                    {projects[currentImageIndex]}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

