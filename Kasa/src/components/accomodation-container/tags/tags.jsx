import React from 'react';
import './tags.scss';

const Tags = ({tags}) => {
    return(
        <div className='tagsBox'>
            <p className='tags'>{tags}</p>
            <p className='tags'>{tags}</p>
            <p className='tags'>{tags}</p>
        </div>
    )
}

export default Tags