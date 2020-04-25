import React, {useState, useCallback, useRef, useEffect} from 'react';
import {videoList} from './config';

import './styles.css';

/**
 * Фон с видеовставками
 */
export const SpaceBackground = () => {
    const [activeVideo, setActiveVideo] = useState(videoList[0]);
    const videoRef = useRef(null);

    const onEndedVideo = useCallback(
        () => {
            const indexOfCurrentVideo = videoList.indexOf(activeVideo);
            const nextVideo = indexOfCurrentVideo === videoList.length - 1
                ? videoList[0]
                : videoList[indexOfCurrentVideo + 1];

            setActiveVideo(nextVideo);
            videoRef.current.load();
        },
        [activeVideo]
    );

    return (
        <div className="space-background-container">
            <video
                className="space-background"
                onEnded={onEndedVideo}
                ref={videoRef}
                preload="metadata"
                muted
                autoPlay
                playsInline
            >
                <source src={activeVideo.src} type="video/webm"></source>
                <source src={activeVideo.fallbackSrc} type="video/mp4"></source>
            </video>
        </div>
    )
};
