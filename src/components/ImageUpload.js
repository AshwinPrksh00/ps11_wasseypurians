import React, { useState }  from 'react'
// import storage from '../firebase';
import SignOut from './SignOut';
import { auth, storage } from "../fire.js";
import { Button } from '@material-ui/core'

function ImageUpload() {

    const [image , setImage] = useState(null);
const upload = ()=>{
  if(image == null)
    return;
  storage.ref(`/images/${image.name}`).put(image)
  .on("state_changed" , alert("success") , alert);
}

    return (
        <div style={{
          display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
      }}>
            <center>
      <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
      <Button  onClick={upload}>Upload</Button>
      
     
     
      
      <Button style={{ padding: '10px', fontSize: '15px', borderRadius: '0', fontWeight: '60', }} onClick={() => auth.signOut()}>Sign Out</Button>
        
        </center>
        </div>
    )
}

export default ImageUpload
