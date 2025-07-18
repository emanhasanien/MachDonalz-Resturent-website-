import { Heart, Leaf, Users } from "lucide-react";

const OurValues = () => {
    const card = [
    {
      icon: "heart",
      title: "الجودة أولاً ",
      description:"نحن ملتزمون بتقديم أعلى معايير الجودة في جميع منتجاتنا وخدماتنا",
    },
    {
      icon: "users",
      title: "خدمة العملاء",
      description: "رضا عملائنا هو أولويتنا الأولى، ونسعى دائماً لتقديم تجربة استثنائية",
    },
    {
      icon: "leaf",
      title: "الاستدامة",
      description: "نحن ملتزمون بحماية البيئة من خلال ممارسات مستدامة ومسؤولة",
    },
  ];

  const iconMap={
    "heart": Heart,
    "users": Users,
    "leaf": Leaf 
  }
 
  
  return (
    <div className="my-36 md:my-20  ">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-medium mb-5">
          قيمنا الأساسية
        </h2>
        <p className="text-[20px] text-gray-500 mb-5">
          المبادئ التي توجه عملنا كل يوم
        </p>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {card.map((item) => {
          const IconComponent = iconMap[item.icon]
          return (
            <div key={item.title} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 text-mcdonaliz-red rounded-full mx-auto mb-5">
                <IconComponent className="w-12 h-12 font-medium" />
              </div>
              <h4 className="text-2xl font-medium">{item.title}</h4>
              <p className="text-gray-500 mt-2.5 ">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default OurValues
