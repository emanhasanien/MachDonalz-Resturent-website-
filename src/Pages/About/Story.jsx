import storyImg from '../../../public/assets/aboutImg.jpg'

const Story = () => {
  return (
    <div className="my-20 w-[90%] mx-auto">
      <div>
        <h2 className="text-2xl font-medium md:text-4xl">قصتنا</h2>
        <p className="text-gray-500 my-3.5">
          بدأت رحلة ماكدونالدز في مصر عام 1994، عندما افتتحنا أول فرع لنا في قلب
          القاهرة. منذ ذلك الحين، نحن ملتزمون بتقديم أشهى الوجبات السريعة
          والخدمة المتميزة لعملائنا الكرام.
        </p>
        <p className="text-gray-500 my-3.5">
          على مدار أكثر من ثلاثة عقود، نمونا لنصبح جزءاً لا يتجزأ من النسيج
          الاجتماعي المصري، حيث نخدم ملايين العائلات والأصدقاء في لحظاتهم
          المميزة.
        </p>
        <p className="text-gray-500 my-3.5">
          اليوم، مع أكثر من 150 فرعاً في جميع أنحاء الجمهورية، نواصل التزامنا
          بالجودة والابتكار، ونفخر بكوننا الخيار الأول للوجبات السريعة في مصر.
        </p>
      </div>

      <img src={storyImg} alt="" />
    </div>
  );
};

export default Story;
