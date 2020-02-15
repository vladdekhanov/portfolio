import React from 'react';
import ReactYoutubeBackground from 'react-youtube-background';

import './styles.css';

export const SpaceBackground = () => {
    const onReady = ({target: api}) => {
        api.unloadModule("captions");
        api.unloadModule("cc");
    };
    return (
        <ReactYoutubeBackground 
            videoId="P5_GlAOCHyE"
            className="space-background"
            onReady={onReady}
            nocookie
        />
    )
};