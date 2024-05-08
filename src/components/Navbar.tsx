'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <i className="fas fa-home"></i><span>home</span>
      </Link>
      <Link href="/aboutus">
        <i className="fas fa-question"></i><span>About Us</span>
      </Link>
      <Link href="/courses">
        <i className="fas fa-graduation-cap"></i><span>courses</span>
      </Link>
      <Link href="/teachers">
        <i className="fas fa-chalkboard-user"></i><span>teachers</span>
      </Link>
      <Link href="/contact">
        <i className="fas fa-headset"></i><span>contact us</span>
      </Link>
    </nav>
  );
};

export default Navbar;