import React, { useState, useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  fallbackImage: string;
}

export default function VideoBackground({ fallbackImage }: VideoBackgroundProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  
  const videos = [
    'https://ik.imagekit.io/appraisily/Videos/hero1.mp4?tr=q-35',
    'https://ik.imagekit.io/appraisily/Videos/hero2.mp4?tr=q-35',
    'https://ik.imagekit.io/appraisily/Videos/hero3.mp4?tr=q-35',
    'https://ik.imagekit.io/appraisily/Videos/hero4.mp4?tr=q-35',
    'https://ik.imagekit.io/appraisily/Videos/hero5.mp4?tr=q-35'
  ];

  // Preload next video while current one is playing
  useEffect(() => {
    if (!nextVideoRef.current) return;

    const nextIndex = (currentVideoIndex + 1) % videos.length;
    nextVideoRef.current.src = videos[nextIndex];
    nextVideoRef.current.load();
  }, [currentVideoIndex]);

  // Handle video transitions
  useEffect(() => {
    if (!videoRef.current || !nextVideoRef.current) return;

    const video = videoRef.current;
    const nextVideo = nextVideoRef.current;

    const handleVideoEnd = () => {
      // Switch to next video
      const nextIndex = (currentVideoIndex + 1) % videos.length;
      setCurrentVideoIndex(nextIndex);
      
      // Swap video elements
      video.src = nextVideo.src;
      video.load();
      video.play()
        .catch(error => console.error('Error playing video:', error));
    };

    video.addEventListener('ended', handleVideoEnd);
    return () => video.removeEventListener('ended', handleVideoEnd);
  }, [currentVideoIndex]);

  // Initial video load
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    
    // Start with first video
    video.src = videos[0];
    video.load();

    // Play when loaded
    const handleCanPlay = () => {
      video.play()
        .then(() => setIsVideoPlaying(true))
        .catch(error => console.error('Error playing initial video:', error));
    };

    video.addEventListener('canplay', handleCanPlay);
    return () => video.removeEventListener('canplay', handleCanPlay);
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Fallback Image */}
      <img
        src={`${fallbackImage}?tr=w-1920,h-1080,q-50`}
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

      {/* Main Video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isVideoPlaying ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        crossOrigin="anonymous"
      />

      {/* Preload Next Video */}
      <video
        ref={nextVideoRef}
        className="hidden"
        muted
        playsInline
        crossOrigin="anonymous"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
    </div>
  );
}