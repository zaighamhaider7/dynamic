import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const ProjectCard = ({ work }) => {
    return (
        <div className="project-card" >
            <h3>{work.id}</h3>
            <div className="project-details">
                <div>
                    <h4>{work.title}</h4>
                    {
                        work?.description &&
                        <p>{work.description}</p>
                    }
                </div>
                <span className='arrow-project'>
                    <a href={work.web_link} target="_blank" rel="noopener noreferrer" >
                        <BsArrowRight />
                    </a>
                    {/* <BsArrowRight /> */}
                </span>
            </div>
            <div className="project-image">
                <img src={`http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/website/${work.image}`}
                alt={work.title} className='rounded-lg  h-full w-full' />
            </div>
        </div>
    )
}

export default ProjectCard