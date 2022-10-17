import React, { useState } from "react";

function Views({views, upvotes, downvotes, uploadDate, onVoteClick, onHideEvents}){
   
    const [hideCommentsText, setHideComments] = useState("Hide Comments")
  function handleVoteClick(event){
    // let upvoteNumPlusOne = upvoteNum++
    
    // setUpvotes(upvoteNumPlusOne)
    onVoteClick(event.target.id)
   
  }
  function handleHideCommentsClick(event){

    hideCommentsText === "Hide Comments" ?
    setHideComments("Show Comments")
    : setHideComments("Hide Comments")
    
    onHideEvents();


  }


return (
    <>
    <p>{views} Views | Uploaded {uploadDate}</p>
    <button onClick={handleVoteClick} id="upVotes" >{upvotes} 👍</button>
    <button id="downVotes" onClick={handleVoteClick}>{downvotes} 👎</button>
    <br></br>
    <button onClick={handleHideCommentsClick}>{hideCommentsText}</button>
    </>
)
}

export default Views