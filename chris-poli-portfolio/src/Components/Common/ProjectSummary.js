import React from 'react';
import {Carousel} from "react-responsive-carousel";
import {getProjectByUri} from "../../Constants/Information";
import {Player} from "video-react";

class ProjectSummary extends React.Component {
    render() {
        const project = getProjectByUri(this.props.match.params.id);

        return (
            <div className='Center'>
                <h1>{project.title}</h1>
                {
                    //<Player playsInline src={'https://s3-ap-southeast-2.amazonaws.com/elasticbeanstalk-ap-southeast-2-935255190878/gamevid.mp4'}/>
                }
                <Carousel width='100'>
                    <div>
                        <img className='Avatar' src={project.thumbnail} />
                        <p className="legend">Legend 1</p>
                    </div>
                    {project.photos.map(photo=>(
                        <div>
                            <img className='Avatar' src={photo} />
                            <p className="legend">Legend 1</p>
                        </div>))}
                </Carousel>
                <h4>
                    {project.description}
                </h4>
            </div>

        );
    }
}

export default ProjectSummary;

