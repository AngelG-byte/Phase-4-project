import { useState } from "react";


export default function Popup(){


    const[commentText, setCommentText] = useState('')



    function handleChangeCommentText (e) {
        setCommentText(e.target.value)
    }

    function handleCommentTextSubmission() {
        fetch('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },body: JSON.stringify({
        text: commentText
      }),
    })
    .then(r => r.json())
    .then(data =>{
      setCommentText([...commentText, data])
    })
    }


    return (
        <div className="popup">


        </div>
    )

}