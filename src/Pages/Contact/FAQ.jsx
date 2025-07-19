import React from "react";

const FAQ = () => {
  return (
    <div className="my-20">
      <div className="text-center flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-medium mb-5">
          {" "}
          الأسئلة الشائعة
        </h2>
        <p className="md:text-[20px]  mb-5 text-gray-500">
          إجابات على أكثر الأسئلة شيوعاً
        </p>
      </div>

      <div className="w-[90%] mx-auto">
        <div className="my-10">
          <h3 className="text-2xl font-medium my-2.5">ما هي أوقات التوصيل؟</h3>
          <p className="text-gray-500 text-[18px]">
            نقدم خدمة التوصيل 24 ساعة في معظم المناطق، وحتى الساعة 2 صباحاً في
            بعض المناطق الأخرى.
          </p>
        </div>

        <div className="my-10">
          <h3 className="text-2xl font-medium my-2.5">هل التوصيل مجاني؟</h3>
          <p className="text-gray-500 text-[18px]">
            نعم، التوصيل مجاني لجميع الطلبات التي تزيد عن 500 جنيهاً.
          </p>
        </div>

        <div className="my-10">
          <h3 className="text-2xl font-medium my-2.5">
            {" "}
            كيف يمكنني تقديم شكوى؟
          </h3>
          <p className="text-gray-500 text-[18px]">
            يمكنك تقديم شكواك عبر الاتصال بخدمة العملاء على 19991 أو من خلال
            نموذج الاتصال أعلاه.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
