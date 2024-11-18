import React, { useState, useEffect, useRef } from 'react';

interface Props {
  fallbackImage: string;
}

export default function VideoBackground({ fallbackImage }: Props) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const preloadedVideos = useRef<HTMLVideoElement[]>([]);
  
  const videos = [
    'https://ik.imagekit.io/appraisily/Videos/hero1.mp4?tr=q-35',
    'https://ik.imagekit.io/appraisily/Videos/hero2.mp4?tr=q-35',
    'https://ik.imagekit.io/appraisily/Videos/hero3.mp4?tr=q-35',
    'https://ik.imagekit.io/appraisily/Videos/hero4.mp4?tr=q-35',
    'https://ik.imagekit.io/appraisily/Videos/hero5.mp4?tr=q-35'
  ];

  // Preload videos in sequence
  useEffect(() => {
    let mounted = true;
    let currentIndex = 0;

    const loadNextVideo = () => {
      if (!mounted || currentIndex >= videos.length) return;

      const video = document.createElement('video');
      video.playsInline = true;
      video.muted = true;
      video.crossOrigin = 'anonymous';
      video.src = videos[currentIndex];

      video.addEventListener('loadeddata', () => {
        if (!mounted) return;
        preloadedVideos.current[currentIndex] = video;
        currentIndex++;
        loadNextVideo();
      }, { once: true });

      video.load();
    };

    // Start loading after a short delay
    const timer = setTimeout(loadNextVideo, 1000);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []);

  // Handle video playback
  useEffect(() => {
    if (!videoRef.current || !preloadedVideos.current[currentVideo]) return;
    
    const video = videoRef.current;
    let mounted = true;

    const playNextVideo = async () => {
      if (!mounted) return;

      try {
        video.src = preloadedVideos.current[currentVideo].src;
        await video.load();
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Video playback error:', error);
      }
    };

    const handleEnded = () => {
      if (!mounted) return;
      const nextVideo = (currentVideo + 1) % videos.length;
      setCurrentVideo(nextVideo);
    };

    video.addEventListener('ended', handleEnded);
    playNextVideo();

    return () => {
      mounted = false;
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentVideo]);

  return (
    <div className="absolute inset-0">
      {/* Optimized Fallback Image */}
      <img
        className={`h-full w-full object-cover transition-opacity duration-1000 ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
        src={`${fallbackImage}&tr=w-1920,h-1080,q-50`}
        alt="Background"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        width="1920"
        height="1080"
      />

      {/* Video Player */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        crossOrigin="anonymous"
      />

      {/* Optimized Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
    </div>
  );
}