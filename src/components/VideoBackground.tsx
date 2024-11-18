import React, { useState, useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  fallbackImage: string;
}

export default function VideoBackground({ fallbackImage }: VideoBackgroundProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  // Optimize videos for different screen sizes
  const videos = [
    {
      desktop: 'https://ik.imagekit.io/appraisily/Videos/hero1.mp4?tr=w-1920,q-70',
      mobile: 'https://ik.imagekit.io/appraisily/Videos/hero1.mp4?tr=w-640,q-60'
    },
    {
      desktop: 'https://ik.imagekit.io/appraisily/Videos/hero2.mp4?tr=w-1920,q-70',
      mobile: 'https://ik.imagekit.io/appraisily/Videos/hero2.mp4?tr=w-640,q-60'
    },
    {
      desktop: 'https://ik.imagekit.io/appraisily/Videos/hero3.mp4?tr=w-1920,q-70',
      mobile: 'https://ik.imagekit.io/appraisily/Videos/hero3.mp4?tr=w-640,q-60'
    },
    {
      desktop: 'https://ik.imagekit.io/appraisily/Videos/hero4.mp4?tr=w-1920,q-70',
      mobile: 'https://ik.imagekit.io/appraisily/Videos/hero4.mp4?tr=w-640,q-60'
    },
    {
      desktop: 'https://ik.imagekit.io/appraisily/Videos/hero5.mp4?tr=w-1920,q-70',
      mobile: 'https://ik.imagekit.io/appraisily/Videos/hero5.mp4?tr=w-640,q-60'
    }
  ];

  // Detect mobile device
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const video = videoRef.current;
    const nextVideo = nextVideoRef.current;
    if (!video || !nextVideo) return;

    let isCurrentVideoLoaded = false;
    let isNextVideoLoaded = false;

    // Load current video
    const loadCurrentVideo = () => {
      video.src = isMobile ? videos[currentVideo].mobile : videos[currentVideo].desktop;
      video.load();
    };

    // Load next video
    const loadNextVideo = () => {
      const nextIndex = (currentVideo + 1) % videos.length;
      nextVideo.src = isMobile ? videos[nextIndex].mobile : videos[nextIndex].desktop;
      nextVideo.load();
    };

    // Handle video ended
    const handleEnded = () => {
      setIsVideoPlaying(false);
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    // Handle current video loaded
    const handleCurrentVideoLoaded = () => {
      isCurrentVideoLoaded = true;
      if (!isVideoPlaying) {
        video.play()
          .then(() => setIsVideoPlaying(true))
          .catch((error) => {
            console.error('Error playing current video:', error);
            setIsVideoPlaying(false);
          });
      }
    };

    // Handle next video loaded
    const handleNextVideoLoaded = () => {
      isNextVideoLoaded = true;
    };

    // Add event listeners
    video.addEventListener('loadeddata', handleCurrentVideoLoaded);
    video.addEventListener('ended', handleEnded);
    nextVideo.addEventListener('loadeddata', handleNextVideoLoaded);

    // Start loading videos
    loadCurrentVideo();
    loadNextVideo();

    // Auto-play first video when component mounts
    const autoPlayTimeout = setTimeout(() => {
      if (video && !isVideoPlaying) {
        video.play()
          .then(() => setIsVideoPlaying(true))
          .catch((error) => {
            console.error('Error auto-playing video:', error);
            setIsVideoPlaying(false);
          });
      }
    }, 1000); // Delay auto-play by 1 second

    // Cleanup
    return () => {
      clearTimeout(autoPlayTimeout);
      if (video) {
        video.removeEventListener('loadeddata', handleCurrentVideoLoaded);
        video.removeEventListener('ended', handleEnded);
        video.pause();
      }
      if (nextVideo) {
        nextVideo.removeEventListener('loadeddata', handleNextVideoLoaded);
        nextVideo.pause();
      }
    };
  }, [currentVideo, videos, isMobile]);

  return (
    <div className="absolute inset-0">
      {/* Responsive Background Image */}
      <picture>
        {/* Mobile devices */}
        <source
          media="(max-width: 640px)"
          srcSet={`${fallbackImage}?tr=w-640,h-960,q-60`}
        />
        {/* Tablets */}
        <source
          media="(max-width: 1024px)"
          srcSet={`${fallbackImage}?tr=w-1024,h-768,q-60`}
        />
        {/* Desktop - high quality */}
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

      {/* Video elements */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isVideoPlaying ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        crossOrigin="anonymous"
      />

      <video
        ref={nextVideoRef}
        className="hidden"
        muted
        playsInline
        crossOrigin="anonymous"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
    </div>
  );
}