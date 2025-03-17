import React, { useState, useRef } from 'react';

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="w-full max-w-6xl mt-16 flex justify-center">
            <div className="w-full md:w-3/4 relative">
                <video
                    ref={videoRef}
                    width="500"
                    height="300"
                    preload="none"
                    loop
                    muted
                    className="w-full rounded-lg shadow-md"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                >
                    <source src="/Hero.mp4" type='video/mp4' />
                    Your browser doesn&apos;t support the video tag
                </video>

                <button
                    onClick={togglePlay}
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-black bg-opacity-60 text-white rounded-full w-16 h-16 
                     flex items-center justify-center cursor-pointer
                     hover:bg-opacity-80 transition-opacity
                     ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                    {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" />
                            <rect x="14" y="4" width="4" height="16" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Video;