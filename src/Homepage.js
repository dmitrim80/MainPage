import React, { useState, useEffect } from "react";
import { storage, auth } from './firebase-config'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import imagepath1 from './images/Acro.jpeg'
import imagepath2 from './images/Chalice.jpeg'
import imagepath3 from './images/Monti.jpeg'
import imagepath4 from './images/Favia.jpeg'
import imagepath5 from './images/Mushroom.jpeg'
import imagepath6 from './images/Scoly.jpeg'
import imagepath7 from './images/Zoas.jpeg'
import imagepath8 from './images/FishTank.jpeg'
import imagepath9 from './images/NPSCoral.jpeg'
import imagepath10 from './images/AquascapeIdeas.jpeg'



const Homepage = () => {
  const images = [
    { src: imagepath1, label: 'Acro', route: '/Acro' },
    { src: imagepath2, label: 'Chalice', route: '/Chalice' },
    { src: imagepath3, label: 'Monti', route: '/Monti' },
    { src: imagepath4, label: 'Favia', route: '/Favia' },
    { src: imagepath5, label: 'Mushrooms', route: '/Mushrooms' },
    { src: imagepath6, label: 'Scoly', route: '/Scoly' },
    { src: imagepath7, label: 'Zoas', route: '/Zoas' },
    { src: imagepath8, label: 'FishTank Placement Ideas', route: '/FishTankFurn' },
    { src: imagepath9, label: 'NPSCoral', route: '/NPSCorals' },
    { src: imagepath10, label: 'Aquascape Ideas', route: '/Aquascape' }
  ];

    const navigate = useNavigate()

    const handleImageClick = (route) =>{
        navigate(route)
    }
   
  
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([])

    const imageListRef = ref(storage,"images/")

    const uploadImage = () => {
      if(imageUpload == null) return;

      const imageRef = ref(storage, `images/${imageUpload.name + v4() }`)

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
    
  return (
    <div className="main-page">
      <div>
        <div className="images-list">

          {images.map((image, index) => (
          <div key={index} className="image-container" onClick={() => handleImageClick(image.route)}>
            <img src={image.src} className="img-grid" />
            <span className="img-label">{image.label}</span>
          </div>
          ))}
          </div> 
      </div>  
    </div>
  )
}

export default Homepage