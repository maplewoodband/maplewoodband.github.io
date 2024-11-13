// components/Navbar.js
import Link from 'next/link';

const Navbar = () => (
  <div>
    <div class="nav-container">
      <nav>
      <ul>
          <li><Link  href="/">Home</Link></li>
          <li><Link  href="/music">Music</Link></li>
          <li><Link  href="/videos">Videos</Link></li>
          <li><Link  href="/gallery">Gallery</Link></li>
          <li><Link  href="/feedback">Feedback</Link></li>
          <li><Link  href="/contact">Contact</Link></li>
        </ul>
      </nav>
      </div>
      <div class="maplewood-banner-container">
        <div class="maplewood-banner">Maplewood Ceilidh Band</div>
    </div>
  </div>
  
);

export default Navbar;