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

  // Preload all videos on mount
  useEffect(() => {
    preloadedVideos.current = videos.map(() => {
      const video = document.createElement('video');
      video.playsInline = true;
      video.muted = true;
      video.crossOrigin = 'anonymous';
      return video;
    });

    // Start preloading all videos
    videos.forEach((src, index) => {
      const video = preloadedVideos.current[index];
      video.src = src;
      video.load();
    });

    return () => {
      preloadedVideos.current.forEach(video => {
        video.pause();
        video.removeAttribute('src');
        video.load();
      });
    };
  }, []);

  // Handle video playback
  useEffect(() => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    let mounted = true;

    const playNextVideo = async () => {
      if (!mounted) return;

      try {
        // Use the preloaded video's src
        video.src = preloadedVideos.current[currentVideo].src;
        await video.load();
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Video playback error:', error);
        }
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

  // Add video source hint to browser
  useEffect(() => {
    const hints = videos.map(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = src;
      link.type = 'video/mp4';
      link.crossOrigin = 'anonymous';
      return link;
    });

    hints.forEach(link => document.head.appendChild(link));

    return () => {
      hints.forEach(link => document.head.removeChild(link));
    };
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Fallback Image */}
      <img
        className={`h-full w-full object-cover transition-opacity duration-1000 ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
        src="https://ik.imagekit.io/appraisily/WebPage/hero_background.jpg?tr=q-50"
        alt="Background"
        loading="eager"
        decoding="async"
        fetchpriority="high"
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
    </div>
  );
}