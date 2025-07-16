import Button from "../../Components/Button";

const Hero = ({ HeroImg }) => {
  return (
    <>
      <div className="h-96">
        <div className="absolute inset-0 bg-black opacity-85">
          <div
            className="absolute inset-0 bg-cover bg-center "
            style={{
              backgroundImage: `url(${HeroImg})`,
            }}
          ></div>
        </div>

        <div className="relative mx-auto text-center mt-[20%] text-white  z-10 ">
          <div>
            <h1 className="text-4xl  md:text-6xl font-bold mb-8 ">
              أهلاً بكم في ماكدونالدز مصر
            </h1>
            <p className="text-2xl mb-4">
              استمتع بألذ الوجبات السريعة والطعم الأصيل
            </p>
            <Button text={'اطلب الان'}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
