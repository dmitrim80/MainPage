import React, { useState, useEffect } from "react";
import { storage } from './firebase-config'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from "uuid";

const FishTankFurn = () => {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([])
    const imageListRef = ref(storage,"Fish Tank as Furniture/")
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const uploadImage = () => {
      if(imageUpload == null) return;

      const imageRef = ref(storage, `Fish Tank as Furniture/${imageUpload.name + v4() }`)

      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      })
    }

    useEffect(() =>{
        listAll(imageListRef).then((response) => {
          const fetchURLs = response.items.map((item)=>{
            return getDownloadURL(item)
          })
          Promise.all(fetchURLs).then((urls) =>{
            setImageList(urls)
          })
        })
      }, [])
      const handleImageClick = (url) => {
        setSelectedImage(url);
        setIsModalOpen(true);
    };

      const ImageModal = ({ url, onClose }) => {
        if (!url) return null;    
        return (
            <div className="modal-backdrop" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <img src={url} alt="Full Size" />
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        );
    };
  return (
    <>
    <input type="file" 
                onChange={(event) => 
                  setImageUpload(event.target.files[0])
                }/>
                <button onClick={uploadImage}>
                  Upload Image
                </button>
    <div className="images-list">
    {imageList.map((url, index) => (
        <div key={index} className="image-container">
            <img src={url} className="img-firebase" onClick={() => handleImageClick(url)} />
            <input type="text" placeholder="Enter text" className="image-text-field" />
        </div>
    ))}
    {isModalOpen && <ImageModal url={selectedImage} onClose={() => setIsModalOpen(false)} />}
  </div>
    </>
    
  )
}
export default FishTankFurn