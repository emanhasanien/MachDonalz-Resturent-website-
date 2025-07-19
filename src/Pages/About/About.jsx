import Experince from "./Experince";
import OurValues from "./OurValues";
import Story from "./Story";
import TimeLine from "./TimeLine";

const About = () => {
  return (
    <section >
      {/* about us  */}

      <div className="h-96 bg-mcdonaliz-red text-white text-center flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-medium mb-5"> من نحن</h2>
        <p className="md:text-[20px]  mb-5">
          منذ أكثر من 30 عاماً، نقدم لكم أشهى الوجبات وأفضل الخدمات في جميع
          أنحاء مصر
        </p>
        
      </div>

      <Experince />
      <Story/>
      <OurValues/>
      <TimeLine/>

    </section>
  );
};

export default About;
