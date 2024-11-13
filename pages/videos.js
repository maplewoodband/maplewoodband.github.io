// pages/music.js
import Navbar from '../components/Navbar';

const Videos = () => {
    return (
      <div>
      <Navbar />
      <div class="page-title">Videos</div>
        <div class="page-content">
		      <p>
            <iframe  id="_ytid_89710"  width="780" height="439"  data-origwidth="780" data-origheight="439" src="https://www.youtube.com/embed/wHg2uafnxFU?enablejsapi=1&autoplay=0&cc_load_policy=0&cc_lang_pref=&iv_load_policy=1&loop=0&modestbranding=0&rel=1&fs=1&playsinline=0&autohide=2&theme=dark&color=red&controls=1&" class="__youtube_prefs__  no-lazyload" title="YouTube player"  allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-no-lazy="1" data-skipgform_ajax_framebjll=""></iframe>
            <iframe  id="_ytid_29118"  width="780" height="439"  data-origwidth="780" data-origheight="439" src="https://www.youtube.com/embed/9eh-IZlDeLw?enablejsapi=1&autoplay=0&cc_load_policy=0&cc_lang_pref=&iv_load_policy=1&loop=0&modestbranding=0&rel=1&fs=1&playsinline=0&autohide=2&theme=dark&color=red&controls=1&" class="__youtube_prefs__  no-lazyload" title="YouTube player"  allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-no-lazy="1" data-skipgform_ajax_framebjll=""></iframe>
            <iframe width="780" height="439" src="https://www.youtube.com/embed/CCj42RMx4iI?si=5cvrTTIXEL_tagCb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
        </div>
      </div>
    );
  };
  
  export default Videos;