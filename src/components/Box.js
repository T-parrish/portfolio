import React from 'react';

const Box = ({color, opacity}) => {
    const style = {
        display: 'inline-block',
        backgroundColor: color,
        opacity: opacity
    }
    
    return <div style={style} /> 
};

export default Box