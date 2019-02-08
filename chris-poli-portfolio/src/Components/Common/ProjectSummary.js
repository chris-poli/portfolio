import React from 'react';
import {Carousel} from "react-responsive-carousel";
import {getProjectByUri} from "../../Constants/Information";
import {Player} from "video-react";

class ProjectSummary extends React.Component {

    renderContent(project) {
        if (project.uri === 'loot-framework') {
            return <Player playsInline src={'https://s3-ap-southeast-2.amazonaws.com/elasticbeanstalk-ap-southeast-2-935255190878/gamevid.mp4'}/>
        } else {
            return (
                <Carousel>
                    <div>
                        <img className='Avatar' src={project.thumbnail} />
                        <p className="legend">Legend 1</p>
                    </div>
                    {project.photos && project.photos.map(photo=>(
                        <div>
                            <img className='Avatar' src={photo} />
                            <p className="legend">Legend 1</p>
                        </div>))}
                </Carousel>
            )
        }
    }
    render() {
        const uri = this.props.match.params.id;
        const project = getProjectByUri(uri);

        return (
            <div className='Center'>
                <h1>{project.title}</h1>
                {this.renderContent(project)}
                <h4>{project.description}</h4>
            </div>

        );
    }
}

export default ProjectSummary;

