import Link from 'next/link'
import Head from 'next/head'

const Navbar = () => {

  return (

    <nav>
      <div className="logo">
        <h1>Some List</h1>
      </div>
      <Link href="/works"><a>How it Works</a></Link>
      <Link href="/#services"><a>Services</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="#"><a>More!</a></Link>
    </nav>

  );

}

export default Navbar;
