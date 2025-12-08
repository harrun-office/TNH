import React, { useState } from 'react';

const ImageLoader = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`image-loader-container ${className || ''}`} style={{ position: 'relative', width: '100%', height: '100%' }}>
      {isLoading && (
        <div className="loading-spinner" style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          width: '40px',
          height: '40px' 
        }}>
          <div className="spinner-ring" style={{ width: '40px', height: '40px', borderWidth: '3px' }}></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ 
          opacity: isLoading ? 0 : 1, 
          transition: 'opacity 0.3s ease',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageLoader;
