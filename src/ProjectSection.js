import React from 'react';
import './ProjectSection.css';
import Project from './Project.js';

function ProjectSection() {
    return (
        <div className="projectSection" id="projects">
            <div className="projectSection__left">
                <Project
                    backgroundColor="green"
                    image=""
                    src="https://itch.io/embed/439919?bg_color=7cc68d&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=43916b"
                    frameborder="0"
                    itchLink="https://guambo.itch.io/goo-runner"
                    playStoreLink="https://play.google.com/store/apps/details?id=com.Guambo.GooRunner"
                    descriptionParagraph={
                        <p>
                        Arcade mobile game made using Unity2D Game Engine, C#, and Aseprite over the course of one month. The objective
                                    is to avoid an endless wave of oncoming obstacles by jumping over them. Each obstacle you jump over rewards you
                                    with 1 point. So far I've published the game to the Google Play Store and Itch.io (see link above).
                        </p>
                    }
                />
                <Project
                    backgroundColor="rgb(143, 86, 59)" 
                    image=""
                    src="https://itch.io/embed/822002?bg_color=45283c&amp;fg_color=eec39a&amp;link_color=8f563b&amp;border_color=4e4c60"
                    frameborder="0"
                    itchLink="https://guambo.itch.io/goo-runner"
                    playStoreLink="https://play.google.com/store/apps/details?id=com.Guambo.GooRunner"
                    descriptionParagraph={
                        <p>
                        Collaborated with 3 other programmers from France and 1 composer from the US. We submitted the game to a 48-hour game development competition called <a
                                href="https://itch.io/jam/mix-and-game-jam-2020">Mix and Game Jam 2020</a>. My main role was 2D artist, but I also coded the player movement, the shooting mechanics, and the infinite background scrolling effect in C#. <a href="https://itch.io/jam/mix-and-game-jam-2020/rate/822002">Click here to view the submission page!</a>
                        </p>
                    }
                />
            </div>
            <div className="projectSection__right">
                <Project
                    backgroundColor="rgb(93, 29, 67)" 
                    image=""
                    src="https://itch.io/embed/748529?bg_color=aac755&amp;fg_color=163c44&amp;link_color=5d1d43&amp;border_color=479870"
                    frameborder="0"
                    itchLink="https://guambo.itch.io/platforming-prototype"
                    playStoreLink=""
                    descriptionParagraph={
                        <p>
                        Made using Unity2D Game Engine and C#. Art assets were made using Aseprite. I spent around 2-3 months tweaking the movement code to make the player movement feel <i>just</i> right. If you aren't familiar with what a platformer is then think of the old 2D Mario series.
                        </p>
                    }
                />
            </div>
        </div>
    )
}

export default ProjectSection;
