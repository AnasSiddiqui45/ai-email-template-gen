import React from 'react'

function ColorPickerField({ label, value, onHandleStyleChange,outerStyle }) {
    return (
        <div className='flex flex-col gap-2 ' style={outerStyle}>
            <h2>{label}</h2>
            <input type='color' value={value}
                onChange={(e) => onHandleStyleChange(e.target.value)}
            />
        </div>
    )
}

export default ColorPickerField
