import React from 'react';

import video1 from './assets/1.webm';
import video2 from './assets/2.webm';

import './styles.css';

/**
 * Фон с видеовставками
 */
export const SpaceBackground = () => {
    return (
        <div className="space-background-container">
            <video className="space-background" autoPlay loop muted>
                <source src={video1} type="video/webm"></source>
            </video>
        </div>
    )
};