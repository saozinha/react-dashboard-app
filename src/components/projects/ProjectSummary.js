import React from 'react'


const ProjectSummary = ({project}) => {
    return ( 
            <div className="card z-depth-0 project-summary"> 
                    <div className="card-content grey-text text-dark"> 
                        <span className="card-title"> {project.title} </span>
                        <p> {project.content} </p>
                        <p className="grey-text">  20 June , 2Am  </p>
                    </div> 
            </div>  
    )
}

export default ProjectSummary