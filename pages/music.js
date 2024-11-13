// pages/music.js
import Navbar from '../components/Navbar';

const Music = () => {
    return (
      <div>
      <Navbar />
      <div class="page-title">Music</div>
        <div class="page-content">
		    <p><iframe width="780" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?visual=true&#038;url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F15607052&#038;show_artwork=true&#038;maxwidth=780&#038;maxheight=1000&#038;dnt=1"></iframe></p>
	      </div>
      </div>
    );
  };
  
  export default Music;