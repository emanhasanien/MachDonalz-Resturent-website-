import Button from "../../Components/Button";

const Hero = ({ HeroImg }) => {
  return (
    <>
      <div className=" min-h-screen  mb-20  bg-black">
        <div className="relative mx-auto text-center text-white   h-screen flex flex-col items-center justify-center">

          <div className="absolute inset-0  opacity-30">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${HeroImg})`,
              }}
            ></div>
          </div>

          <div className=" ">
            <h1 className="text-3xl  md:text-6xl font-bold mb-8 ">
              أهلاً بكم في ماكدونالدز مصر
            </h1>
            <p className="text-[20px] md:text-2xl mb-4">
              استمتع بألذ الوجبات السريعة والطعم الأصيل
            </p>
            <Button text={"اطلب الان"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
