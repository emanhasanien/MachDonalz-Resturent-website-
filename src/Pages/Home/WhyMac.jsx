import { Star, Clock, Truck } from "lucide-react";

const WhyMac = () => {
  const card = [
    {
      icon: "clock",
      title: "خدمة سريعة",
      description: "نضمن لك الحصول على طلبك في أسرع وقت ممكن",
    },
    {
      icon: "star",
      title: "جودة عالية",
      description: "نستخدم أفضل المكونات لضمان الطعم المميز",
    },
    {
      icon: "truck",
      title: "توصيل مجاني",
      description: "توصيل مجاني لجميع الطلبات فوق 300 جنية",
    },
  ];

  const iconMap={
    "clock": Clock,
    "star": Star,
    "truck": Truck
  }
  return (
    <div className="my-36 md:my-20  ">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-medium mb-5">
          لماذا تختار ماكدونالدز؟
        </h2>
        <p className="text-[20px] text-gray-500 mb-5">
          نقدم لك أفضل تجربة طعام سريع
        </p>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {card.map((item) => {
          const IconComponent = iconMap[item.icon]
          return (
            <div key={item.title} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-mcdonaliz-red rounded-full mx-auto mb-5">
                <IconComponent className="w-8 h-8  text-white" />
              </div>
              <h4 className="text-2xl font-medium">{item.title}</h4>
              <p className="text-gray-500 mt-2.5 ">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyMac;
