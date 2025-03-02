import React from 'react'

function LogoHeaderComponent({ style, imageUrl, outerStyle }) {
    return (
        <div>
            <div style={outerStyle}>
                <img src={imageUrl} alt='logo' style={style} />
            </div>
        </div>
    )
}

export default LogoHeaderComponent
