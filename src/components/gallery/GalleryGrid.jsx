import ImageLoader from '../common/ImageLoader';

const GalleryGrid = ({ images }) => {
  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <ImageLoader src={image.src} alt={image.alt || `Gallery image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;

