import axios from "axios";
import { MessageCircle } from "lucide-react";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const [toast, setToast] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/messages", formData);
      showToast("تم إرسال الرسالة بنجاح", "success");
    } catch (err) {
      showToast("حدث خطأ أثناء إرسال الرسالة", "error");
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 3000);
  };

  return (
    <div className="w-[90%] mx-auto my-20">
      <div className="text-center md:text-start">
        <div className="flex items-center">
          <MessageCircle className="w-8 h-8 text-mcdonaliz-red" />
          <h2 className="text-2xl md:text-4xl mb-5"> أرسل لنا رسالة</h2>
        </div>
        <p className="md:text-[20px] text-gray-500 mb-5">
          نحن نقدر آراءكم واقتراحاتكم ونسعد بالرد عليكم
        </p>
      </div>

      {/* toast message for form scussess or faild */}

      {toast.message && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded shadow-md text-white z-50 transition-all duration-500 ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* contact form  */}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start"
      >
        <div className="flex flex-col md:w-[50%]">
          <label htmlFor="name" className="text-[18px]">
            الاسم *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="ادخل اسمك بالكامل"
            className="p-0.5 border border-gray-600 rounded-sm  my-2.5 text-gray-500 focus:outline-hidden"
            required
          />
        </div>

        <div className="flex flex-col md:w-[50%]">
          <label htmlFor="email" className="text-[18px]">
            البريد الإلكتروني *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            placeholder=" example@email.com "
            className="p-0.5 border border-gray-600 rounded-sm  my-2.5 text-gray-500 focus:outline-hidden"
            required
          />
        </div>

        <div className="flex flex-col md:w-[50%]">
          <label htmlFor="phone" className="text-[18px]">
            رقم الهاتف *
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder=" 01023456789 "
            className="p-0.5 border border-gray-600 rounded-sm  my-2.5 text-gray-500 focus:outline-hidden"
            required
          />
        </div>

        <div className="flex flex-col md:w-[50%]">
          <label htmlFor="topic" className="text-[18px]">
            موضوع الرسالة *
          </label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            placeholder=" اكتب الرسالة"
            className="p-0.5 border border-gray-600 rounded-sm  my-2.5 text-gray-500 focus:outline-hidden"
            required
          />
        </div>

        <div className="flex flex-col md:w-[50%]">
          <label htmlFor="message" className="text-[18px]">
            الرسالة *
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="اكتب رسالتك هنا"
            className=" resize-none border border-gray-600 rounded-sm  my-2.5 text-gray-500 focus:outline-hidden"
            required
          ></textarea>
        </div>
        <div></div>
        <button
          type="submit"
          className="bg-mcdonaliz-red text-white p-2.5 rounded-sm"
        >
          ارسل الرسالة
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
