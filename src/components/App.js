import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video";
import Views from "./Views";
import Comments from "./Comments";

/*
App
|-Video
|-Views
|-Comments
 */
function App() {
  // console.log("Here's your data:", video);

  const [upvoteNum, setUpvotes] = useState(video.upvotes)
  const [downVoteNum, setDownVotes] = useState(video.downvotes)
  const [hideComments, setHideComments] = useState(false)

  function onVoteClick(eventId){
    const upvoteNumPlusOne = upvoteNum + 1;
    const downvoteNumPlusOne = downVoteNum + 1
 
   eventId === "upVotes" ?
    setUpvotes(upvoteNumPlusOne)
    : setDownVotes(downvoteNumPlusOne)  
}

function onHideEvents(){
  setHideComments(hideComments=>!hideComments)
}


  return (
    <div className="App">
      <Video
        width={"919"}
        height={"525"}
        src={video.embedUrl}
        frameBorder={"0"}
        title={video.title}
      />
      <Views 
      views={video.views} 
      upvotes={upvoteNum} 
      downvotes={downVoteNum} 
      uploadDate={video.createdAt}
      onVoteClick={onVoteClick}
      onHideEvents={onHideEvents}
      />
      {hideComments ? null :
      <Comments comments={video.comments}/>}
    </div>
  );
}

export default App;
