import React from 'react';
import './Project.css';

function Project(props) {
    return (
        <div className="project" style={{backgroundColor: props.backgroundColor}}>
            {props.itchLink !== "" &&
                <iframe
                    src={props.iframeSrc}
                    frameborder="0">
                        <a href={props.itchLink}></a>
                </iframe>
            }
            {props.itchLink == "" && 
                <div className="project__header">
                    {props.image !== "" && 
                        <img src={props.image} />
                    }
                    <div className="project__headerRight">
                        {props.title !== "" &&
                            <h2>{props.title}</h2>
                        }
                        {props.playStoreLink !== "" &&
                            <a href={props.playStoreLink}>
                                <img srcset="https://static.itch.io/images/store_badges/google.png 1x, https://static.itch.io/images/store_badges/google@2x.png 2x" src="https://static.itch.io/images/store_badges/google.png"></img>
                            </a>
                        }
                    </div>
                </div>
            }
            {props.descriptionParagraph}
        </div>
    )
}

export default Project;
