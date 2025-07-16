import React from 'react'

const Links = () => {
  return (
        <div>
           <h3 className="text-2xl text-mcdonaliz-yellow font-semibold">روابط سريعة</h3>
           <ul >
            <li className="pt-2.5 font-semibold hover:text-[#FFCC00]"><a href="/">الرئيسية</a></li>
            <li  className="pt-2.5 font-semibold hover:text-[#FFCC00]"><a href="/menu">القائمة</a></li>
            <li  className="pt-2.5 font-semibold hover:text-[#FFCC00]"><a href="/about">من نحن</a></li>
            <li  className="pt-2.5 font-semibold hover:text-[#FFCC00]"><a href="/contact">اتصل بنا</a></li>
           </ul>
         </div>
  )
}

export default Links
