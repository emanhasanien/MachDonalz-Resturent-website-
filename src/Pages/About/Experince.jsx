import { AwardIcon, Clock, MapPin, Users } from "lucide-react";

const Experince = () => {
  const expItems = [
    {
      icon: "users",
      eperNumber: "5M+",
      descrption: "عملاء سعداء",
    },
    {
      icon: "mappin",
      eperNumber: "150+",
      descrption: "فرع في مصر",
    },
    {
      icon: "awardicon",
      eperNumber: "30+",
      descrption: "سنة من الخبرة",
    },
    {
      icon: "clock",
      eperNumber: "24",
      descrption: "ساعة عمل يومياً",
    },
  ];

  const iconMap = {
    'users': Users,
    'mappin': MapPin,
    'awardicon': AwardIcon,
    'clock': Clock,
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center content-center mt-20">
      {expItems.map((item) => {
        const IconComponent = iconMap[item.icon];

        return (
          <div key={item.icon} className="flex flex-col items-center ">
            <IconComponent className="h-12 w-12 text-3xl font-medium"/>
            <p className="text-3xl font-medium mt-2.5">{item.eperNumber}</p>
            <p className="text-gray-500 text-[18px]">{item.descrption}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experince;
