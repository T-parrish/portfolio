import React from 'react';
import projects from '../fixtures/projects';
import { ProjectList } from '../components/ProjectList'

export const PortfolioPage = () => (
    <div> 
        <ProjectList projects={projects} />
    </div>
)