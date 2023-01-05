import { useState, useEffect } from "react";
import { Form } from "react-router-dom";


export default function Popup({postObject}){



    const[commentText, setCommentText] = useState('')
    const [thread, setThread] = useState([])

console.log(thread);
    useEffect(()=>{
    fetch(`/posts/${postObject.id}`)
      .then(response => response.json())
      .then(threadObj => {
        setThread(threadObj.comments)
      })
   },[])

    function handleChangeCommentText (e) {
        setCommentText(e.target.value)
    }

    function handleCommentTextSubmission() {
        fetch('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },body: JSON.stringify({
        text: commentText,
        post_id: postObject.id
      }),
    })
    .then(r => r.json())
    .then(data =>{
      setThread([...thread, data])
    })
    }
        // const username = thread.map(comment=>{
        //     return( comment.user.username)
        // })
    const allCommentsForPost = thread.map(comment =>{
       console.log(comment)
        return (
            <>
            <img src={comment.image}/>
            <p>{comment.username}:{comment.text}</p>
            </>
        )
    })


    return (
        <div className="popup">
            {allCommentsForPost}
            <Form>
                <input type="text" onChange={handleChangeCommentText} value={commentText} placeholder='responses?'/>
                <button onClick={handleCommentTextSubmission}>Submit</button>
            </Form>

        </div>
    )

}