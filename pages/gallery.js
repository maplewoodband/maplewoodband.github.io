// pages/tours.js
import Navbar from '../components/Navbar';
import ImageGallery from "react-image-gallery";

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
    original: image_1.src,
    thumbnail: thumb_1.src,
  },
  {
    original: image_2.src,
    thumbnail: thumb_2.src,
  },
  {
    original: image_3.src,
    thumbnail: thumb_3.src,
  },
  {
    original: image_4.src,
    thumbnail: thumb_4.src,
  },
  {
    original: image_5.src,
    thumbnail: thumb_5.src,
  },
  {
    original: image_6.src,
    thumbnail: thumb_6.src,
  },
  {
    original: image_7.src,
    thumbnail: thumb_7.src,
  },
  {
    original: image_8.src,
    thumbnail: thumb_8.src,
  },
];

const images_2 = [
  {
    original: image_9.src,
    thumbnail: thumb_9.src,
  },
  {
    original: image_10.src,
    thumbnail: thumb_10.src,
  },
  {
    original: image_11.src,
    thumbnail: thumb_11.src,
  },
  {
    original: image_12.src,
    thumbnail: thumb_12.src,
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