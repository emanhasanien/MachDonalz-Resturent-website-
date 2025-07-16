import Bio from "./Bio";
import ContactUs from "./ContactUs";
import Links from "./Links";
import WorkHours from "./WorkHours";
const Footer = () => {
  return (
    <>
      <footer className=" bg-gray-900 text-white ">
        <div className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  py-10">
          <Bio />
          <Links />
          <WorkHours />
          <ContactUs />
        </div>
        <div className="border-t border-gray-700 mt-8 py-8 text-center ">
          <p className="text-gray-400">
            &copy; 2025 ماكدونالدز مصر. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
