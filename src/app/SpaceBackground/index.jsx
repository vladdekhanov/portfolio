import React from 'react';

import video1 from './assets/1.webm';
import video1mp4 from './assets/1.mp4';
import video2 from './assets/2.webm';
import video2mp4 from './assets/2.mp4';

import './styles.css';

/**
 * Фон с видеовставками
 */
export const SpaceBackground = () => {
    return (
        <div className="space-background-container">
            <video className="space-background" preload="metadata" autoPlay loop muted playsInline>
                <source src={video1} type="video/webm"></source>
                <source src={video1mp4} type="video/mp4"></source>
            </video>
        </div>
    )
};
