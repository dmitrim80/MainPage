import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  const src = `https://www.youtube.com/embed/${videoId}?rel=0`;  

  return (

    <div 
        className="youtube-video-container" 
        style={{ 
            overflow: 'hidden', 
            paddingBottom: '56.25%', 
            position: 'relative', 
            height: 0 }}>

      <iframe
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        title="YouTube video player"
      />
    </div>
  );
};

export default YouTubeVideo;