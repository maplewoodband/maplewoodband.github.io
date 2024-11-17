// pages/tours.js
import Navbar from '../components/Navbar';
import ImageGallery from "react-image-gallery";
import Image from 'next/image'
import image_1 from '../assets/images/2016_lower_damgate_farm/1.png';
import thumb_1 from '../assets/images/2016_lower_damgate_farm/thumbnails/1.png';
import image_2 from '../assets/images/2016_lower_damgate_farm/2.png';
import thumb_2 from '../assets/images/2016_lower_damgate_farm/thumbnails/2.png';
import image_3 from '../assets/images/2016_lower_damgate_farm/3.png';
import thumb_3 from '../assets/images/2016_lower_damgate_farm/thumbnails/3.png';
import image_4 from '../assets/images/2016_lower_damgate_farm/4.png';
import thumb_4 from '../assets/images/2016_lower_damgate_farm/thumbnails/4.png';
import image_5 from '../assets/images/2016_lower_damgate_farm/5.png';
import thumb_5 from '../assets/images/2016_lower_damgate_farm/thumbnails/5.png';
import image_6 from '../assets/images/2016_lower_damgate_farm/6.png';
import thumb_6 from '../assets/images/2016_lower_damgate_farm/thumbnails/6.png';
import image_7 from '../assets/images/2016_lower_damgate_farm/7.png';
import thumb_7 from '../assets/images/2016_lower_damgate_farm/thumbnails/7.png';
import image_8 from '../assets/images/2016_lower_damgate_farm/8.png';
import thumb_8 from '../assets/images/2016_lower_damgate_farm/thumbnails/8.png';

import image_9 from '../assets/images/2016_rehearsal/1.jpg';
import thumb_9 from '../assets/images/2016_rehearsal/thumbnails/1.jpg';
import image_10 from '../assets/images/2016_rehearsal/2.jpg';
import thumb_10 from '../assets/images/2016_rehearsal/thumbnails/2.jpg';
import image_11 from '../assets/images/2016_rehearsal/3.jpg';
import thumb_11 from '../assets/images/2016_rehearsal/thumbnails/3.jpg';
import image_12 from '../assets/images/2016_rehearsal/4.jpg';
import thumb_12 from '../assets/images/2016_rehearsal/thumbnails/4.jpg';


const images = [
  {
    original: image_1,
    thumbnail: thumb_1,
  },
  {
    original: image_2,
    thumbnail: thumb_2,
  },
  {
    original: image_3,
    thumbnail: thumb_3,
  },
  {
    original: image_4,
    thumbnail: thumb_4,
  },
  {
    original: image_5,
    thumbnail: thumb_5,
  },
  {
    original: image_6,
    thumbnail: thumb_6,
  },
  {
    original: image_7,
    thumbnail: thumb_7,
  },
  {
    original: image_8,
    thumbnail: thumb_8,
  },
];

const images_2 = [
  {
    original: image_9,
    thumbnail: thumb_9,
  },
  {
    original: image_10,
    thumbnail: thumb_10,
  },
  {
    original: image_11,
    thumbnail: thumb_11,
  },
  {
    original: image_12,
    thumbnail: thumb_12,
  }
];


const Gallery = () => {
    return (
      
      <div>
        <Navbar />
        <div class="page-title">Gallery</div>
        <div class="main-text">
        <p>Thanks to wedding photographer <a href='http://www.benjaminthephotographer.co.uk/'>Ben Pollard</a></p>
        <p>for these great photos taken   at <a href="https://www.facebook.com/lowerdamgatefarm">Lower Damgate Farm, Ilam</a>.</p>
        </div>
        <div class="page-content">
          <ImageGallery items={images} />
        </div>

        <div class="page-content">
          <ImageGallery items={images_2} />
        </div>
      </div>
    );
  };
  
  export default Gallery;