import React from 'react';

import spaceCraftVideo from './assets/moon-astronaut-spacecraft.webm';
import './styles.css';

/**
 * Фон с видеовставками
 */
export const SpaceBackground = () => {
    return (
        <video className="space-background" autoPlay loop muted>
            <source src={spaceCraftVideo} type="video/webm"></source>
        </video>
    )
};