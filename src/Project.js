import React from 'react';
import './Project.css';

function Project(props) {
    return (
        <div className="project" style={{backgroundColor: props.backgroundColor}}>
            <iframe
                src={props.src}
                frameborder={props.frameborder}>
                    <a href={props.itchLink}>Goo Runner by
                    Guambo</a>
            </iframe>
            <img src={props.image} />
            {props.descriptionParagraph}
        </div>
    )
}

export default Project;
