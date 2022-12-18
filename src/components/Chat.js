import React, { useState, useEffect, useRef } from 'react'
import Message from './Message'
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import SendMessage from './SendMessage'
const style = {
  main: `flex flex-col p-10 relative`,
}

const Chat = () => {
  const scroll = useRef()

  const [messages, setMessages] = useState([])
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = []
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      setMessages(messages)
    })
    return () => unsubscribe()
  }, [])

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <SendMessage scroll={scroll} />
      <span ref={scroll}> </span>
    </>
  )
}

export default Chat
