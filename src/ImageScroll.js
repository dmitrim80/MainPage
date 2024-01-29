import React, { useState, useEffect } from 'react';
import { storage } from './firebase-config'; // Adjust this import according to your Firebase configuration file
import { ref, list, getDownloadURL } from 'firebase/storage';

    const ImageScroll = () => {
    const [visibleImages, setVisibleImages] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

    useEffect(() => {
        loadMoreImages();
    }, []);

    const [favorites, setFavorites] = useState([]); // Array to store favorite images

    const toggleFavorite = (e, imageUrl) => {
    e.stopPropagation(); // Prevent triggering image click

    const isFavorited = favorites.includes(imageUrl);
    if (isFavorited) {
        setFavorites(favorites.filter(url => url !== imageUrl));
    } else {
        setFavorites([...favorites, imageUrl]);
    }
    };

    const loadMoreImages = async () => {
    const acroporaRef = ref(storage, 'Acropora'); // Adjust the path as per your Firebase Storage structure
    try {
      const result = await list(acroporaRef, { maxResults: 7, pageToken: nextPageToken });
      const urlPromises = result.items.map((itemRef) => getDownloadURL(itemRef));
      const urls = await Promise.all(urlPromises);
      setVisibleImages((prevImages) => [...prevImages, ...urls]);
      setNextPageToken(result.nextPageToken);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleScroll = (e) => {
    const bottom = e.target.scrollWidth - e.target.scrollLeft === e.target.clientWidth;
    if (bottom && nextPageToken) {
      loadMoreImages();
    }
  };
  const imageStyle = {
    width: '150px', // Adjust the width as needed
    height: 'auto', // This will keep the aspect ratio of the image
    display: 'inline-block',
    marginRight: '10px'
  };


  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
        <div>
        <div className="box-scroll-images" onScroll={handleScroll} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            {visibleImages.map((imageUrl, index) => (
                <div key={index} className='scroll-image-container'>
                    <img key={index} src={imageUrl} alt={`image_${index}`} style={imageStyle} onClick={() => openModal(imageUrl)} />
                    <span className={`heart-icon ${favorites.includes(imageUrl) ? 'favorited' : ''}`} onClick={(e) => toggleFavorite(e, imageUrl)}>&hearts;</span>
                </div>
            ))}
        </div>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
            <div className='modal-content'>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <img className="modal-image" src={selectedImage} alt="Full size" />
            <span className={`heart-icon-modal ${favorites.includes(selectedImage) ? 'favorited' : ''}`} onClick={(e) => toggleFavorite(e, selectedImage)}>&hearts;</span>
            </div>
        </div>
      )}
    </div>
    </>
    
  );
};

export default ImageScroll;
