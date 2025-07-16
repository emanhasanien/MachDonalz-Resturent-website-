import { Phone, MapPin} from "lucide-react"

const ContactUs = () => {
  return (
   <div className="space-y-2">
          <h3 className="text-2xl text-mcdonaliz-yellow font-semibold">اتصل بنا </h3>
            <div className="flex items-center space-x-2 space-x-reverse ">
              <Phone size={24} className="text-mcdonaliz-yellow " />
              <span className=" font-medium text-gray-300 mr-2">19991 </span>
          </div> 

           <div className="flex items-center space-x-2 space-x-reverse ">
              <MapPin size={24} className="text-mcdonaliz-yellow " />
              <span className=" font-medium text-gray-300 mr-2">القاهرة، مصر  </span>
          </div> 
         </div>
  )
}

export default ContactUs
