// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <div class="page-title">About Us</div>
        <div class="main-text">
            <h1>Introduction</h1>
            Maplewood ceilidh band is a collaboration of accomplished folk musicians who have wide ranging experience. We are based in Macclesfield and Buxton and Leek and play mostly in the Cheshire, Derbyshire, Staffordshire and Greater Manchester areas.
            
            The band play a wide variety of tunes. We particularly enjoy playing music from North America and Québec but also play many traditional English, Scottish and Irish tunes. Although the emphasis is on folk dance tunes, but we also include some listening tune sets between dances.
            
            <h2>Band Line-up</h2>
                <ul id="primary-menu" display="inline">
                    <li>Woody: Fiddle</li>
                    <li>Matt: 1 and 2 row Melodeons, English Concertina</li>
                    <li>Paul: Acoustic Guitar</li>
                    <li>Steve: Piano, English Concertina, Caller</li>
                </ul>

            <h2>Events</h2>
            <p>Maplewood is available for any private function that wants a ceilidh (aka barn dance, hoe down, folk dance) 
                including weddings and birthday parties. We provide a caller for dances and also bring our own high-quality 
                Bose amplification. We are covered by public liability insurance and our equipment is PAT tested. 
                You don’t need to have any previous experience of folk dancing, because the caller will explain and walk 
                through all the dances and keep calling the moves during dancing. The main aim is to have fun!</p>
            
            <p>We play at public dances such as Manchester Ceilidh, Poynton Ceilidh and at Bollington Arts Centre 
                and also make occasional acoustic appearances at pubs in the area.</p>
            
            <p> We usually perform as a three or four piece band plus caller, but subsets of Maplewood are available for 
                smaller gigs or acoustic settings. Guest players may also make an occasional appearance.</p>
            
            <p>For latest news see our <a href="https://www.facebook.com/Maplewood-Ceilidh-Band-309130822431043/">Facebook page</a>.</p>
        </div>
        <Footer />

    </div>
  );
};

export default Home;