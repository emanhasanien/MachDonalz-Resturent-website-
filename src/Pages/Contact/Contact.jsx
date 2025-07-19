import React from 'react'
import ContactInfo from './ContactInfo'
import ContactLocation from './ContactLocation'
import FAQ from './FAQ'
import MacMap from './MacMap'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section className='min-h-screen'>
      
      <div className="h-96 bg-mcdonaliz-red text-white text-center flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-medium mb-5"> تواصل معنا </h2>
        <p className="md:text-[20px]  mb-5">
         نحن هنا للاستماع إليك ومساعدتك في أي وقت
        </p>
        
      </div>
      <ContactInfo/>
      <ContactForm/>
      <MacMap/>
      <ContactLocation/>
      <FAQ/>
    </section>
  )
}

export default Contact
