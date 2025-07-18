import React from 'react'

const TimeLine = () => {
     const timeline = [
    {
      year: "1994",
      title: "البداية في مصر",
      description: "افتتاح أول فرع لماكدونالدز في القاهرة"
    },
    {
      year: "2000",
      title: "التوسع السريع",
      description: "افتتاح 25 فرعاً في المحافظات المختلفة"
    },
    {
      year: "2010",
      title: "الخدمة الرقمية",
      description: "إطلاق تطبيق التوصيل والطلب الإلكتروني"
    },
    {
      year: "2020",
      title: "الريادة المستمرة",
      description: "الوصول لأكثر من 150 فرعاً وخدمة ملايين العملاء"
    }
  ];
  return (
    <div>
       <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-medium mb-5">
         رحلتنا عبر الزمن
        </h2>
        <p className="text-[20px] text-gray-500 mb-5">
          محطات مهمة في تاريخ ماكدونالدز مصر
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center  my-20'>
        {timeline.map((item) => {
          return <div key={item.year}>
            <p className='bg-mcdonaliz-yellow py-1 px-2.5 rounded-2xl font-medium'>{item.year}</p>
            <h3 className='text-[20px] my-5'>{item.title}</h3>
            <p className='text-gray-500'>{item.description}</p>
          </div>
        }
        )}
      </div>

    </div>
  )
}

export default TimeLine
