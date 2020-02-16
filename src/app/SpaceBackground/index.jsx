import React from 'react';

import spaceCraftVideo from './assets/moon-astronaut-spacecraft.mov';
import './styles.css';

export const SpaceBackground = () => {
    return (
        <video className="space-background" autoPlay loop>
            <source src={spaceCraftVideo} type="video/mp4"></source>
        </video>
    )
};