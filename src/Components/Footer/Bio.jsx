import {Facebook, Instagram ,Twitter} from "lucide-react"

const Bio = () => {
  return (
   <>
   <div>
           <h3 className="text-2xl text-mcdonaliz-yellow font-semibold">ماكدونالز مصر</h3>
           <p className="w-3xs pt-2.5 font-medium text-gray-300">نحن ملتزمون بتقديم أفضل الوجبات السريعة والخدمة المتميزة لعملائنا في جميع أنحاء مصر.</p>
           <div className="pt-5 flex space-x-4">
             <Facebook size={30} className="text-blue-500 hover:text-blue-400"/>
             <Instagram size={30} className="text-pink-500 hover:text-pink-400"/>
             <Twitter size={30} className="text-blue-500 hover:text-blue-400"/>
           </div>
         </div>
   </>
  )
}

export default Bio
