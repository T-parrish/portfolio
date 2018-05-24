// fully functional component optimized to render multiple
// project items mapped through the ProjectList component
// currently experimenting with a carousel type option

import React from 'react';

export const ProjectItem = (props) => (
    <div className="project-card__box">
        <div className="project-card__top">
            <div className="photo__container">
                <img className="project-card__photo" src={props.img} />
            </div>
            <h3 className="project-card__title"> {props.name} </h3>
        </div>
        <div className="project-card__footer">
            <p className="project-card__description"> {props.description} </p>
            <div className="project-card__icons">
                <a href={props.github}><i className="fab fa-github"></i></a>
                <a href={props.liveSite}><i className="fas fa-eye"></i></a>
            </div>
        </div>

    </div>
)