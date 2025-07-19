import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      details: ["19991", "+20 2 1234 5678"],
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "راسلنا",
      details: ["info@mcdonalds-egypt.com", "support@mcdonalds-egypt.com"],
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "زورنا",
      details: ["القاهرة الجديدة", "التجمع الخامس"],
      color: "text-red-600",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["الأحد - الخميس: 24 ساعة", "الجمعة: 6 ص - 2 ص"],
      color: "text-purple-600",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center py-10">
        {contactInfo.map((item) => {
          return (
            <div
              key={item.icon}
              className="flex flex-col items-center cursor-pointer  hover:scale-105 duration-200"
            >
              <item.icon
                className={`h-12 w-12 text-2xl md:text-3xl font-medium ${item.color}`}
              />
              <p className="text-2xl  font-medium my-2.5">{item.title}</p>
              <p className="text-gray-500 text-[18px] mb-5 px-5 text-center">
                {item.details}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
