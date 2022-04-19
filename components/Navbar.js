import styled from 'styled-components'
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src='/magal-logo.jpg' width={150} height={60} />
      </div>
      <div>
        <Link href='/' passHref>
            <Link>Home</Link>
        </Link>
        <Link href='/menu' passHref>
            <Link>Menu</Link>
        </Link>
        <Link href='/hours' passHref>
            <Link>Hours</Link>
        </Link>
        <Link href='/' passHref>
            <Link>Reservations</Link>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar