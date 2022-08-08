import React from 'react';
function Project (props) {
    return (
        <div>
            <div className='is-flex-direction-row is-flex-wrap-wrap columns is-desktop'>
                {props.projects.map((project) => (
                    <div className='column is-half' key={project.id}>
                        <div>
                            <div>
                                <figure>
                                    <a href={project.live}>
                                        <img src={process.env.PUBLIC_URL + project.image} />
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div></div>
                                <div>
                                    <p>{project.title}</p>
                                </div>
                            </div>
                            <div>{project.description}
                        
                            <div>Languages: {project.languages}
                            NPM Packages: {project.packages}</div>
                            <div className='card'>
                                <footer>
                                    <a href={project.repo}>Click for repository
                                    </a>
                                    <a href={project.live}>Click for live site
                                    </a>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
export default Project;