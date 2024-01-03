import React from 'react';
import './tags.scss';


const Tags = ({tagList}) => {
    return(
        <ul className='tagsBox'>
            {/* On parcourt la liste des tags pour les retourner */}
            {tagList.map((tags, index) =>
                    <li className='tags' key={index}>{tags}</li>
                )}
        </ul>
    )
}

export default Tags