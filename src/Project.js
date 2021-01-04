import React, { useState } from 'react';
import './Project.css';

function Project(props) {
    const [imageHeight, setImageHeight] = useState(0);

    const onImageLoad = ({target:img}) => {
        setImageHeight(img.offsetHeight);
    }
    
    return (
        <div className="project" style={{backgroundColor: props.backgroundColor}}>
            {props.itchLink !== "" &&
                <iframe
                    src={props.iframeSrc}
                    frameBorder="0">
                        <a href={props.itchLink}></a>
                </iframe>
            }
            {props.itchLink === "" && 
                <div className="project__header" style={{backgroundColor: props.headerColor}}>
                    {props.image !== "" && 
                        <img onLoad={onImageLoad} src={props.image} />
                    }
                    <div className="project__headerRight" style={{height: imageHeight}}>
                        {props.title !== "" &&
                            <a href="https://play.google.com/store/apps/details?id=music.generator"><h1>{props.title}</h1></a>
                        }
                        {props.playStoreLink !== "" &&
                            <a href={props.playStoreLink}>
                                <img srcSet="https://static.itch.io/images/store_badges/google.png 1x, https://static.itch.io/images/store_badges/google@2x.png 2x" src="https://static.itch.io/images/store_badges/google.png"></img>
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
