import {Clock} from "lucide-react"

const WorkHours = () => {
  return (
     <div className="space-y-2">
          <h3 className="text-2xl text-mcdonaliz-yellow font-semibold">ساعات العمل</h3>
            <div className="flex items-center space-x-2 space-x-reverse ">
              <Clock size={24} className="text-mcdonaliz-yellow " />
              <span className=" font-medium text-gray-300 mr-2">السبت - الخميس: 24 ساعة</span>
          </div> 

           <div className="flex items-center space-x-2 space-x-reverse ">
              <Clock size={24} className="text-mcdonaliz-yellow " />
              <span className=" font-medium text-gray-300 mr-2">الجمعة: 6 صباحاً - 2 صباحاً</span>
          </div> 
         </div>

  )
}

export default WorkHours
