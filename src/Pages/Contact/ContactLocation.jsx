import { Clock, MapPin, Phone } from "lucide-react";

const ContactLocation = () => {
     const locations = [
    {
      name: "فرع المعادي",
      address: "شارع 9، المعادي، القاهرة",
      phone: "02-2345-6789",
      hours: "24 ساعة"
    },
    {
      name: "فرع مدينة نصر",
      address: "شارع عباس العقاد، مدينة نصر",
      phone: "02-2456-7890",
      hours: "24 ساعة"
    },
    {
      name: "فرع الإسكندرية",
      address: "طريق الكورنيش، الإسكندرية",
      phone: "03-3456-7890",
      hours: "6 ص - 2 ص"
    }
  ];
  return (
    <div className="my-20">
         
      <div className="text-center flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-medium mb-5">  فروعنا الرئيسية </h2>
        <p className="md:text-[20px]  mb-5 text-gray-500">
         تعرف على أقرب فرع إليك
        </p>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center text-center">
        {locations.map((item) => {
          return <div key={item.name} className="flex flex-col">
            <p className="text-[20px] font-medium text-mcdonaliz-red">{item.name}</p>
            <div className="flex gap-1 my-2">
                <MapPin/>
                <p className="text-gray-500 font-medium">{item.address}</p>
            </div>

             <div className="flex gap-1 mb-2 ">
                <Phone/>
                <p className="text-gray-500 font-medium">{item.phone}</p>
            </div>

             <div className="flex gap-1 mb-2">
                <Clock/>
                <p className="text-gray-500 font-medium">{item.hours}</p>
            </div>
          </div>
        }
        )}
      </div>
    </div>
  )
}

export default ContactLocation
