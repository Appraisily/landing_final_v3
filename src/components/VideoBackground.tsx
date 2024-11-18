import React, { useState, useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  fallbackImage: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ fallbackImage }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mountedRef = useRef(false);
  
  const videos = [
    'https://ik.imagekit.io/appraisily/Videos/hero1.mp4?tr=w-1920,q-70',
    'https://ik.imagekit.io/appraisily/Videos/hero2.mp4?tr=w-1920,q-70',
    'https://ik.imagekit.io/appraisily/Videos/hero3.mp4?tr=w-1920,q-70',
    'https://ik.imagekit.io/appraisily/Videos/hero4.mp4?tr=w-1920,q-70',
    'https://ik.imagekit.io/appraisily/Videos/hero5.mp4?tr=w-1920,q-70'
  ];

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      if (mountedRef.current) {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      }
    };

    const handleCanPlay = () => {
      if (mountedRef.current && video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              if (mountedRef.current) {
                setIsVideoPlaying(true);
              }
            })
            .catch((error) => {
              console.debug('Video autoplay error:', error);
              // Fallback to showing the image if autoplay fails
              setIsVideoPlaying(false);
            });
        }
      }
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('canplay', handleCanPlay);

    // Set initial video source
    video.src = videos[currentVideo];
    video.load();

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('canplay', handleCanPlay);
      if (video.readyState >= 2) {
        video.pause();
      }
    };
  }, [currentVideo, videos]);

  return (
    <div className="absolute inset-0">
      {/* Responsive Background Image */}
      <picture>
        {/* Mobile */}
        <source
          media="(max-width: 640px)"
          srcSet={`${fallbackImage}?tr=w-640,h-960,q-60`}
        />
        {/* Tablet */}
        <source
          media="(max-width: 1024px)"
          srcSet={`${fallbackImage}?tr=w-1024,h-768,q-60`}
        />
        {/* Desktop */}
        <img
          src={`${fallbackImage}?tr=w-1920,h-1080,q-75`}
          alt="Background"
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            isVideoPlaying ? 'opacity-0' : 'opacity-100'
          }`}
          loading="eager"
          decoding="async"
          fetchpriority="high"
          width="1920"
          height="1080"
        />
      </picture>

      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isVideoPlaying ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        autoPlay
        preload="auto"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
    </div>
  );
};

export default VideoBackground;