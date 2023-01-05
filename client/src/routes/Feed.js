import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import FeedCard from "../components/FeedCard";
import SearchBar from "../components/SearchBar"
function Feed({user}) {

  const [postsArray, setPostsArray] = useState([])
  const [searchedItems, setSearchedItems] = useState("")
  const [feeling, setFeeling] = useState('')


  function handleChangeFeeling (e){
 setFeeling(e.target.value)
  }
useEffect(()=>{
    fetch('/posts')
      .then(response => response.json())
      .then(postObjects => {
        setPostsArray(postObjects)
      })
   },[])

   function handlePostSubmission() {
    fetch('/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },body: JSON.stringify({
    body:feeling
  }),
})
.then(r => r.json())
.then(data =>{
  setPostsArray([...postsArray, data])
})
}
console.log(postsArray);
   const searchedItemsArray = postsArray.filter((postObject) => {
      return postObject.body.toLowerCase().includes(searchedItems.toLowerCase())
   })

   const allFeedCards = searchedItemsArray.map(postObject => {
      return (
        <FeedCard
          postObject={postObject}
        />
      )
   })


  return (

    <div className="home">
      
      <SearchBar setSearchedItems={setSearchedItems}/>
      <h1>Welcome {user.username}</h1>

      <div>
          {allFeedCards}
      </div>
    <Form>
    <input type="text" onChange={handleChangeFeeling} value={feeling} placeholder='how you feel'/>
    <button onClick={handlePostSubmission}>Post</button>
    </Form>
    </div>
  );
}

export default Feed;
