import React from "react";

function SocialIconsComponent({ style, outerStyle, socialIcons }) {
  return (
    <div style={outerStyle}>
      {socialIcons?.map((iconData, index) => (
        <a key={index} href={iconData.url || "#"} target="_blank" rel="noopener noreferrer">
          <img src={iconData.icon} alt={`Social icon ${index + 1}`} style={style} />
        </a>
      ))}
    </div>
  );
}

export default SocialIconsComponent;
