// import React from 'react'
// import Link from 'next/link'
// const Header = () => {
//   return (
//    <>
//     <header className='flex items-center justify-between'>
//         <Link className='text-primary text-3xl font-semibold' href=''>ST PIZZA</Link>
//         <nav className='flex items-center gap-8 text-gray-700 font-semibold'>
//           <Link href={''}>Home</Link>
//           <Link href={''}>Menu</Link>
//           <Link href={''}>About</Link>
//           <Link href={''}>Contact</Link>
//           <Link href={''} className='bg-primary text-white px-8 py-2 rounded-full' >Login</Link>
//         </nav>
//       </header>
//    </>
//   )
// }

// export default Header
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 lg:p-8'>
      <Link href='/' passHref>
        <h1 className='text-primary text-2xl lg:text-4xl font-semibold'>
          ST PIZZA
        </h1>
      </Link>
      <nav className='hidden lg:flex items-center gap-8 text-gray-700 font-semibold'>
        <Link href='/'>Home</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/login' className='bg-primary text-white px-4 py-2 rounded-full'>
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
