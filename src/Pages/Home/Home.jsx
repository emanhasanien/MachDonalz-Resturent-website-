import Hero from "./Hero"
import HeroImg from "/assets/HeroImg.jpg"
import WhyMac from "./WhyMac"
import FeaturedProducts from "./FeaturedProducts"

const Home = () => {
  return (
    <>
     <section className="min-h-screen">
     <Hero HeroImg={HeroImg}/>
     <WhyMac/>
     <FeaturedProducts/>
     </section>
     
    </>
  )
}

export default Home
