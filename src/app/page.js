import Image from 'next/image'
import Hero from './components/layout/Hero'
import HomeMenu from './components/layout/HomeMenu'
import About from './components/about/About'
import Contact from './components/contact/Contact'


export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>
      <About/>
      <Contact/>
    </>
      )
}
