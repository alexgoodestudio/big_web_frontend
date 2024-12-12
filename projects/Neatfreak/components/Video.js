import React from 'react';
import myMP4Video from './Images/trim4.mp4'; 
import "./Dashboard.css";

function Video() {
  return (
    <div >
      <video className=' image-container element' autoPlay muted loop preload="metadata" playsInline>
        <source src={myMP4Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  ); 
}

export default Video;
