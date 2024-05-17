import React from 'react';

const ExampleCarouselImage = ({ text, imageUrl }) => {
    return (
        <div>
            <img src={imageUrl} alt={text} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    );
}

export default ExampleCarouselImage;