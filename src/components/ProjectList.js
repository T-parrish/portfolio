import React from 'react';
import { ProjectItem } from '../components/ProjectItem';

export const ProjectList = (props) => (
    <div className="portfolio__container"> 
            {
                props.projects.map((project) => {
                    return <ProjectItem key={project.id} {...project}/>
                })
            }
    </div>
)
