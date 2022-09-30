import React from 'react';
import PhotoList  from '../PhotoList';
import {capitalizeFirstLetter} from '../../utils/helpers';


function Gallery(props) {
    const { currentCategory } = props;
    console.log(props);// not getting name from current category
    return (
        <section>
            <h1 data-testid='h1tag'>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category = {currentCategory.name}/>
        </section>
    );
}
export default Gallery;