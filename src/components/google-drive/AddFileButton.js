import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { storage } from '../../firebase'

export default function AddFileButton({ currentFolder }) {

   const { currentUser } = useAuth()

   function handleUpload(e) {

      const file = e.target.files[0]

      if (currentFolder == null || file == null)
         return

      console.log(file)   
      
      const filePath = 
         currentFolder.path.length > 0 
         ? `${currentFolder.path.join("/")}/${file.name}` 
         : file.name

      console.log(filePath)
      
      const uploadTask = storage
         .ref(`/files/${currentUser.uid}/${filePath}`)
         .put(file)

      console.log(uploadTask)
   }
   
   return (
      <label className="btn btn-outline-success m-1 mr-2">
         <FontAwesomeIcon icon={faFileUpload} />
         <input 
            type="file" 
            onChange={handleUpload} 
            style = {{
               opacity: 0,
               position: 'absolute',
               left: '-9999px',
            }}
         />
      </label>
   )
}