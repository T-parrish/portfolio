import React from 'react';

export const ProjectItem = (props) => (
    <div className='project-card__box'>
        <div className="project-card__top">
            <div className="photo__container">
                <img className="project-card__photo" src={props.project.img} />
            </div>
            <h3 className="project-card__title"> {props.project.name} </h3>
        </div>
        <div className="project-card__footer">
            <p className="project-card__description"> {props.project.description} </p>
            <div className="project-card__icons">
                <a href={props.project.github}><i className="fab fa-github"></i></a>
                <a href={props.project.liveSite}><i className="fas fa-eye"></i></a>
            </div>
        </div>
    </div>
)