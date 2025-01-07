import React, { useState, useRef, useEffect } from 'react';

const getVideoUrl = (url: string, isMobile: boolean) => {
  // Mobile devices get smaller, more optimized videos
  const width = isMobile ? 640 : 1920;
  const quality = isMobile ? 60 : 70;
  return `${url}?tr=w-${width},q-${quality}`;
};

interface VideoBackgroundProps {
  fallbackImage: string;
}

const videos = [
  'https://ik.imagekit.io/appraisily/Videos/hero1.mp4',
  'https://ik.imagekit.io/appraisily/Videos/hero2.mp4',
  'https://ik.imagekit.io/appraisily/Videos/hero3.mp4',
  'https://ik.imagekit.io/appraisily/Videos/hero4.mp4',
  'https://ik.imagekit.io/appraisily/Videos/hero5.mp4'
];

const VideoBackground: React.FC<VideoBackgroundProps> = ({ fallbackImage }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Optimize video loading
    video.preload = 'metadata';
    video.muted = true;
    video.playsInline = true;
    video.src = getVideoUrl(videos[currentVideo], isMobile);
    video.load();

    // Preload next video
    const nextVideo = new Audio();
    nextVideo.preload = 'metadata';
    nextVideo.src = getVideoUrl(videos[(currentVideo + 1) % videos.length], isMobile);

    const playVideo = async () => {
      try {
        await video.play();
        setIsVideoPlaying(true);
      } catch (error) {
        console.debug('Video playback error:', error);
      }
    };

    const handleEnded = () => {
      if (!mountedRef.current) return;
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    video.addEventListener('loadedmetadata', playVideo);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadedmetadata', playVideo);
      video.removeEventListener('ended', handleEnded);
      video.pause();
      video.src = '';
      video.load();
      nextVideo.src = '';
    };
  }, [currentVideo]);

  return (
    <div className="absolute inset-0">
      {/* Optimized Fallback Image */}
      <picture>
        {/* Mobile - Aggressive optimization */}
        <source
          media="(max-width: 640px)"
          srcSet={`${fallbackImage}?tr=w-640,h-960,q-60,bl-30,f-jpg`}
          type="image/jpeg"
        />
        {/* Tablet */}
        <source
          media="(max-width: 1024px)"
          srcSet={`${fallbackImage}?tr=w-1024,h-768,q-60,bl-30,f-jpg`}
          type="image/jpeg"
        />
        {/* Desktop - Progressive loading */}
        <source
          media="(min-width: 1025px)"
          srcSet={`${fallbackImage}?tr=w-1920,h-1080,q-50,bl-30,pr-true,f-jpg`}
          type="image/jpeg"
        />
        <img
          src={`${fallbackImage}?tr=w-1920,h-1080,q-50,bl-30,pr-true,f-jpg`}
          alt=""
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
      />

      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
    </div>
  );
};

export default VideoBackground;