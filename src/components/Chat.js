import React,{ useState, useEffect, useRef } from 'react'
import { db, auth, storage } from '../fire'
import SendMessage from './SendMessage'
import SignOut from './SignOut'
import ImageUpload from './ImageUpload'


function Chat() {

    const scroll = useRef()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div>
            
            <ImageUpload/>
            {/* <SignOut /> */}
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p className="paragraph">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
