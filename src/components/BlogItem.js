import React from 'react';


export const BlogItem = (props) => (
    <div className='blog__container'> 
        <h4 className='blog__title'> {props.content.title} </h4>
        <p className='blog__description'> {props.content.description} </p>
    </div>
);