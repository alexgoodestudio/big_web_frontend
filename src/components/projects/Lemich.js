import React from "react";

const WebsiteViewer = ({ url }) => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src={url}
        title="Website Viewer"
        allow="autoplay; encrypted-media; fullscreen"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
    
        }}
      />
    </div>
  );
};

export default WebsiteViewer;
