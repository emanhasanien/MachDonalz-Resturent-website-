import Hero from "./Hero"
import HeroImg from "/assets/HeroImg.jpg"
import WhyMac from "./WhyMac"
import FeaturedProducts from "./FeaturedProducts"

const Home = () => {
  return (
    <>
     <section className=" my-20">
     <Hero HeroImg={HeroImg}/>
     <WhyMac/>
     <FeaturedProducts/>
     </section>
     
    </>
  )
}

export default Home
