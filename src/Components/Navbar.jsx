import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const menuItems = [
    { text: "الرئيسية", path: "/" },
    { text: "القائمة", path: "/menu" },
    { text: "من نحن", path: "/about" },
    { text: "اتصل بنا", path: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-mcdonaliz-dark-red shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* شعار ماكدونالدز */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-3xl font-bold">
              ماكدونالدز
            </Link>
          </div>

          {/* روابط التنقل - سطح المكتب */}
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline space-x-4 space-x-reverse">
              {menuItems.map((link) => {
                return (
                  <Link
                    key={link.text}
                    to={link.path}
                    className="text-white  px-3 py-2 rounded-md text-[18px] font-medium hover:text-[#FFCC00] transition-colors "
                  >
                    {link.text}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* زر الطلب */}
         <Button text={"اطلب الآن"}/>

          {/* زر القائمة - الجوال */}
          <div className="md:hidden">
            <button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:text-[#FFCC00]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* القائمة المنسدلة - الجوال */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-mcdonalds-red">
            {menuItems.map((link) => {
              return (
                <Link
                  key={link.text}
                  to={link.path}
                  className="text-white  block px-3 py-2 rounded-md text-base font-medium hover:text-[#FFCC00]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              );
            })}

            <div className="px-3 py-2">
              <button className="w-full p-2.5 rounded-[10px]  bg-mcdonaliz-yellow text-black hover:bg-yellow-500 font-medium">
                اطلب الآن
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
