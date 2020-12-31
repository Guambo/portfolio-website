import React from 'react';
import './ProjectSection.css';
import Project from './Project.js';
import musicAppIcon from './musicAppIcon.png';

function ProjectSection() {
    return (
        <div className="projectSection" id="projects">
            <h1>Projects</h1>
            <div className="projectSection__content">
                <div className="projectSection__content__left">
                    <Project
                        title=""
                        backgroundColor="#ad3045"
                        image=""
                        iframeSrc="https://itch.io/embed/439919?bg_color=7cc68d&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=43916b"
                        itchLink="https://guambo.itch.io/goo-runner"
                        playStoreLink="https://play.google.com/store/apps/details?id=com.Guambo.GooRunner"
                        descriptionParagraph={
                            <p>
                            Arcade mobile game made using Unity2D Game Engine, C#, and Aseprite over the course of one month. The objective
                                        is to avoid an endless wave of oncoming obstacles by jumping over them. Each obstacle you jump over rewards you
                                        with 1 point. So far I've published the game to the <a href="https://play.google.com/store/apps/details?id=com.Guambo.GooRunner">Google Play Store</a> and Itch.io. I used Trello for project management and git for source control.
                            </p>
                        }
                    />
                    <Project
                        title=""
                        backgroundColor="rgb(143, 86, 59)" 
                        image=""
                        iframeSrc="https://itch.io/embed/822002?bg_color=45283c&amp;fg_color=eec39a&amp;link_color=8f563b&amp;border_color=4e4c60"
                        itchLink="https://perceez.itch.io/octshmup"
                        playStoreLink=""
                        descriptionParagraph={
                            <p>
                            2D tetris and shooter game made using Unity2D, C#, and Aseprite. I collaborated with 3 other programmers from France and 1 composer from the US. We submitted the game to a 48-hour game development marathon called <a
                                    href="https://itch.io/jam/mix-and-game-jam-2020">Mix and Game Jam 2020</a>. My main role was 2D artist, but I also coded the player movement, the shooting mechanics, and the infinite background scrolling effect in C#. We used Trello for project management and git for source control. <a href="https://itch.io/jam/mix-and-game-jam-2020/rate/822002">Click here to view the submission page!</a>
                            </p>
                        }
                    />
                </div>
                <div className="projectSection__content__right">
                    <Project
                        title=""
                        backgroundColor="rgb(93, 29, 67)" 
                        image=""
                        iframeSrc="https://itch.io/embed/748529?bg_color=aac755&amp;fg_color=163c44&amp;link_color=5d1d43&amp;border_color=479870"
                        itchLink="https://guambo.itch.io/platforming-prototype"
                        playStoreLink=""
                        descriptionParagraph={
                            <p>
                            2D platformer made using Unity2D Game Engine, C#, and Aseprite. I spent around 2-3 months tweaking the movement code to make the player movement feel <i>just</i> right. If you aren't familiar with what a platformer is then think of the old 2D Mario series. I used Trello for project management and git for source control.
                            </p>
                        }
                    />
                    <Project
                        title="Random Music Generator"
                        backgroundColor="rgb(25 25 82)"
                        headerColor="#bb3333" 
                        image={musicAppIcon}
                        iframeSrc=""
                        itchLink=""
                        playStoreLink="https://play.google.com/store/apps/details?id=music.generator"
                        descriptionParagraph={
                            <p>
                            An Android mobile app that can generate unique short piano tracks with a single tap. Made during Binghamton University's annual 24-hour Hackathon using Android Studio and Java. I collaborated with 2 other programmers and was responsible for debugging the music generation algorithm and UI related code (setting up user input in the app and ensuring user input was valid). We used Trello for project management and git for source control.
                            </p>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectSection;
