// pages/_app.js
//import '../styles/globals.css';
import '../styles/styles.css';
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;