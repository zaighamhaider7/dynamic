import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card" >
            <h3>{project.category}</h3>
            <div className="project-details">
                <div>
                    <h4>{project.title}</h4>
                    {
                        project?.description &&
                        <p>{project.description}</p>
                    }
                </div>
                <span className='arrow-project'>
                    <BsArrowRight />
                </span>
            </div>
            <div className="project-image">
                <img src={project.image} alt={project.title} className='rounded-lg md:h-[260px] h-full w-full' />
            </div>
        </div>
    )
}

export default ProjectCard