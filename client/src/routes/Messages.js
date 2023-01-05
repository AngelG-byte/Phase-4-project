import React,{useState, useEffect} from "react";

function Messages({user, currentRoom}) {
  const [messages, setMessages] = useState('')
  const [messagesArray, setMessagesArray] = useState([])
  // const messages = [{user.id, user.image, timestamp, body, room }]
  // console.log(messages);
  useEffect(()=>{
    fetch('/messages')
      .then(response => response.json())
      .then(messageObj => {
        setMessagesArray(messageObj)
      })
   },[])

  function handleMessage(e) {
    setMessages(e.target.value)

  }

  function handleSendMessage(){
    fetch('/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },body: JSON.stringify({
    body:messages,
    currentRoom
  }),
})
.then(r => r.json())
.then(data =>{
  setMessagesArray([...messagesArray, data])
})
  }
 const blabla = messagesArray.map(message=>{
  return(
    <h1>{message.body}</h1>
  )
 })
  return (
    <div className="products">
      <h1>chat.title</h1>
     {blabla}
      <form >
            <input
                type="text" onChange={handleMessage} value={messages} placeholder=''
            />
            <button onClick={handleSendMessage}> Send </button>
        </form>
    </div>
  );
}

export default Messages;
