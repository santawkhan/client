import React from 'react';
import img1 from '../assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg'
import img2 from '../assets/dom-fou-YRMWVcdyhmI-unsplash.jpg'
import img3 from '../assets/javier-trueba-iQPr1XkF5F0-unsplash.jpg'
import img4 from '../assets/nathan-dumlao-ewGMqs2tmJI-unsplash.jpg'
import img5 from '../assets/pang-yuhao-_kd5cxwZOK4-unsplash.jpg'
import img6 from '../assets/priscilla-du-preez-XkKCui44iM0-unsplash (1).jpg'
const Gallery = () => {
    return (
        <div>
            <p className='text-center text-2xl font-serif font-bold '>Images Gallery</p>
            <div className="card w-['300px'] bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-10 mt-4 mb-6">

                <figure><img src={img1} alt="Shoes" /></figure>
                <figure><img src={img2} alt="Shoes" /></figure>
                <figure><img src={img3} alt="Shoes" /></figure>
                <figure><img src={img4} alt="Shoes" /></figure>
                <figure><img src={img5} alt="Shoes" /></figure>
                <figure><img src={img6} alt="Shoes" /></figure>

            </div>
        </div>
    );
};

export default Gallery;