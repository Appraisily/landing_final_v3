import React, { useState, useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  fallbackImage: string;
}

const videos = [
  'https://ik.imagekit.io/appraisily/Videos/hero1.mp4?tr=w-1920,q-70',
  'https://ik.imagekit.io/appraisily/Videos/hero2.mp4?tr=w-1920,q-70',
  'https://ik.imagekit.io/appraisily/Videos/hero3.mp4?tr=w-1920,q-70',
  'https://ik.imagekit.io/appraisily/Videos/hero4.mp4?tr=w-1920,q-70',
  'https://ik.imagekit.io/appraisily/Videos/hero5.mp4?tr=w-1920,q-70'
];

const VideoBackground: React.FC<VideoBackgroundProps> = ({ fallbackImage }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const mountedRef = useRef(true);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Handle video playback and transitions
  useEffect(() => {
    const currentVideoEl = videoRef.current;
    if (!currentVideoEl) return;

    // Configure video
    currentVideoEl.muted = true;
    currentVideoEl.playsInline = true;
    currentVideoEl.preload = 'auto';

    // Load current video
    currentVideoEl.src = videos[currentVideo];
    currentVideoEl.load();

    // Preload next video
    const nextIndex = (currentVideo + 1) % videos.length;
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'video';
    preloadLink.href = videos[nextIndex];
    document.head.appendChild(preloadLink);

    const playVideo = async () => {
      try {
        setIsTransitioning(true);
        await currentVideoEl.play();
        setIsVideoPlaying(true);
        setIsTransitioning(false);
      } catch (error) {
        console.debug('Video playback error:', error);
        handleNextVideo();
      }
    };

    const handleNextVideo = () => {
      if (!mountedRef.current) return;
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    const handleCanPlay = () => {
      if (mountedRef.current && currentVideoEl.paused) {
        playVideo();
      }
    };

    // Event listeners
    currentVideoEl.addEventListener('canplay', handleCanPlay);
    currentVideoEl.addEventListener('ended', handleNextVideo);
    currentVideoEl.addEventListener('error', handleNextVideo);

    // Start playback
    if (currentVideoEl.readyState >= 3) {
      playVideo();
    }

    return () => {
      if (currentVideoEl) {
        currentVideoEl.removeEventListener('canplay', handleCanPlay);
        currentVideoEl.removeEventListener('ended', handleNextVideo);
        currentVideoEl.removeEventListener('error', handleNextVideo);
        currentVideoEl.pause();
        currentVideoEl.removeAttribute('src');
        currentVideoEl.load();
      }
      document.head.removeChild(preloadLink);
    };
  }, [currentVideo]);

  return (
    <div className="absolute inset-0">
      {/* Fallback Image */}
      <picture>
        <source
          media="(max-width: 640px)"
          srcSet={`${fallbackImage}?tr=w-640,h-960,q-60`}
        />
        <source
          media="(max-width: 1024px)"
          srcSet={`${fallbackImage}?tr=w-1024,h-768,q-60`}
        />
        <img
          src={`${fallbackImage}?tr=w-1920,h-1080,q-75`}
          alt=""
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            isVideoPlaying && !isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          loading="eager"
          decoding="async"
          fetchpriority="high"
          width="1920"
          height="1080"
        />
      </picture>

      {/* Current Video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isVideoPlaying && !isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        autoPlay
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
    </div>
  );
};

export default VideoBackground;