import React from 'react';
import {Carousel} from "react-responsive-carousel";

const ProjectSummary = () => {
    return (
        <div>
            <h1>LootClicker</h1>
            <Carousel>
                <div>
                    <img className='Avatar' src='https://s3-ap-southeast-2.amazonaws.com/chris-poli-files/lc1.jpg' />
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel>
            <h4> LootClicker is a f2p MMO casual clicker game.
                It was built from the ground up specifically for the NEO blockchain and as a game to play casually or on the side while trading cryptocurrencies.
                The centralized aspect of game logic itself is managed by an authoritative server, every action which may effect the in game economy and value of assets is verified and accepted by the server, this will attempt to remove all cheating from the game to properly simulate an in game economy.
                Players can earn items from crates, or in decentralized game modes.
                The in game equippable assets are all integrated into the framework and therefore registered on the NEO blockchain.</h4>
        </div>

    );
};

export default ProjectSummary;