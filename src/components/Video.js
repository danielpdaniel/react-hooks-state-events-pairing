import React from "react";


function Video({ width, height, src, frameBorder, title,}){
    
    
   return (<div className="Video">
      <iframe
        width={width}
        height={height}
        src={src}
        frameBorder={frameBorder}
        allowFullScreen
        title={title}
      />
      <h2>{title}</h2>
    </div>)
}

export default Video