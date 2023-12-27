import React from 'react';
import './tags.scss';


const Tags = ({tagList}) => {
    return(
        <div className='tagsBox'>
            {/* On parcourt la liste des tags pour les retourner */}
            {tagList.map((tags, index) =>
                    <p className='tags' key={index}>{tags}</p>
                )}
        </div>
    )
}

export default Tags