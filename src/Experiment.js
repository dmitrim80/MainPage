import React, { useState, useEffect } from "react";
import { db } from './firebase-config';
import { storage } from './firebase-config'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

import { 
  collection,
   getDocs,
    addDoc,
     updateDoc,
     doc,
     deleteDoc } from 'firebase/firestore';


export default function Test () {

   // const [darkMode, setDarkMode] = React.useState(true)
  
  // function toggleDarkMode() {
  //     setDarkMode(prevMode => !prevMode)
  // }

  // const date = new Date()
  // const hours = date.getHours()

  // React.useEffect(() => {
  //   document.body.style.backgroundColor = darkMode ? '#23252C' : '#F5F5F5';
  //   document.body.style.color = darkMode ? '#F5F5F5' : '#23252C';
  // },[darkMode])

  // let timeOfDay
  // if (hours > 3 && hours < 5) {
  //   timeOfDay = "VERY Early Morning";
  // } else if (hours < 11) {
  //   timeOfDay = "morning";
  // } else if (hours <= 17) {
  //   timeOfDay = "day";
  // } else if (hours < 23) {
  //   timeOfDay = "evening";
  // } else if (hours > 23 || hours < 3) {
  //   timeOfDay = "night";}

    
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

    const [newName,setNewName] = useState("")
    const [newAge,setNewAge] = useState(0)

    const [users, setUsers] = React.useState([]);
    const usersCollectionRef = collection(db, "users");
    
    const deleteUser = async (id) => {
      const userDoc = doc(db,"users",id)
      await deleteDoc(userDoc)
    }

    const updateUser = async (id, age) => {
      const userDoc = doc(db,"users", id)
      const newFields = {age: age + 1}
      await updateDoc(userDoc,newFields)
    }
    const createUser = async () => {
      await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)})
    }
    React.useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
      };

        getUsers();
      }, []);
  return (
    <div className="experiment">
      <div>
              <input type="file" 
                onChange={(event) => 
                  setImageUpload(event.target.files[0])
                }/>
                <button onClick={uploadImage}>
                  Upload Image
                </button>

                {imageList.map((url, index)=> {
                  return <img key={index} src={url} className="img-firebase" />
                })}
      </div>
      <input 
      placeholder="Name..."
      onChange={(event) => {setNewName(event.target.value)}}
      /> 
      <input placeholder="Age..."
      onChange={(event) => {setNewAge(event.target.value)}}
      />

      <button onClick={createUser}>Create User</button>
        {users.map((user) => { 
          return (
          <div>
              {" "}
              <h1 className="test-h1">Name: {user.name}</h1>
              <h1 className="test-h1">Age: {user.age}</h1>
              <button onClick={() => {updateUser(user.id, user.age)}}>Add</button>
              <button on onClick={() => {
                {deleteUser(user.id)}
              }}>Delete User</button>
              
                
            </div> 
        )
        })} 
           
            
    </div>
    /* </div> <div className={darkMode ? "dark" : ""}> */
          
          /* {darkMode ?
            <Option1 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            /> :
            <Option2 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            />
          } */
          
          /* <Option1 /> <Option3 /> */
          /* <Option2 /> <Option4 /> */
          /* <div align="center">
            <p>{date.toLocaleDateString()} and {date.toLocaleTimeString()} </p>
            <p>Good {timeOfDay}!</p>
          </div> */
          /* <Experiment /> */
          /* <Authentication /> */
  )
}
