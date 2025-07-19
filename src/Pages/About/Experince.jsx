import { AwardIcon, Clock, MapPin, Users } from "lucide-react";

const Experince = () => {
  const expItems = [
    {
      icon: Users,
      eperNumber: "5M+",
      descrption: "عملاء سعداء",
    },
    {
      icon: MapPin,
      eperNumber: "150+",
      descrption: "فرع في مصر",
    },
    {
      icon: AwardIcon,
      eperNumber: "30+",
      descrption: "سنة من الخبرة",
    },
    {
      icon: Clock,
      eperNumber: "24",
      descrption: "ساعة عمل يومياً",
    },
  ];

 

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center content-center mt-20">
      {expItems.map((item) => {
       

        return (
          <div key={item.icon} className="flex flex-col items-center ">
            <item.icon className="h-12 w-12 text-3xl font-medium text-mcdonaliz-red"/>
            <p className="text-3xl font-medium mt-2.5">{item.eperNumber}</p>
            <p className="text-gray-500 text-[18px]">{item.descrption}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experince;
