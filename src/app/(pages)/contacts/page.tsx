'use client'

import { useEffect } from 'react';
import Head from 'next/head';
import SeoHead from '@/app/components/SeoHead';
/*import { Oswald } from "next/font/google"
    const oswald  = Oswald({
    subsets: ['vietnamese'],
    weight: '600',

})
    */
export default function Contact(){
   useEffect(()=>{
    const  anime5 = document.querySelectorAll('.animeD')
    const masiv = [...anime5]
    console.log(masiv)
    const callback = (masiv: IntersectionObserverEntry[])=>{
       masiv.forEach(element => {
        if(element.isIntersecting){
           element.target.classList.add('anime2D')
        }else{
          element.target.classList.remove('anime2D')
        }
       });
    }
    const observer2 = new IntersectionObserver(callback, {
      threshold:0.5
    })
    masiv.forEach((el)=>{
      observer2.observe(el)
    })
   })
    return(
        <>
             <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TechTune",
              "image": "https://techtune.com/og/contacts.png",
              "url": "https://techtune.com/contacts",
              "telephone": "+380671234567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Рівне, вул. Технічна, 12",
                "addressLocality": "Рівне",
                "addressCountry": "UA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+380671234567",
                "email": "support@myservice.ua",
                "contactType": "customer support",
                "areaServed": "UA"
              },
              "openingHours": "Mo-Fr 10:00-18:00",
              "sameAs": [
                "https://facebook.com/myservice",
                "https://instagram.com/myservice",
                "https://t.me/myservice"
              ]
            })
          }}
        />
      </Head>
   <SeoHead
  title="Контакти | TechTune — Звʼяжіться з нами"
  description="Звʼяжіться з сервісним центром TechTune — ми відповідаємо оперативно, пояснюємо без зайвого і працюємо з повагою до вас і техніки."
  image="https://techtune.com/og/contacts.png"
  canonical="https://techtune.com/contacts"
/>
<section className="bg-white py-16 px-4 sm:px-8 h-[100vh] w-[100%] flex justify-around items-center">
  <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 items-start">
    

    <div>
      <h1 className="text-3xl text-gray-600 font-bold mb-4 animeD">Звʼяжіться з нами</h1>
      <p className="text-gray-600 mb-6 animeD">
        Маєте питання? Напишіть — ми відповідаємо оперативно!
      </p>
      
      <ul className="space-y-3 text-gray-700 text-[17px] ">
        <li className='animeD'>📞 <span className="font-medium animeD">+380 67 123 45 67</span></li>
        <li className='animeD'>✉️ <span className="font-medium animeD">support@myservice.ua</span></li>
        <li className='animeD'>📍 <span className="font-medium animeD">Рівне, вул. Технічна, 12</span></li>
        <li className='animeD'>🕒 <span className="font-medium animeD">Пн–Пт: 10:00–18:00</span></li>
      </ul>
{/*
      <div className="flex space-x-4 mt-6">
        <a href="https://t.me/myservice" target="_blank">
          <img src="/icons/telegram.svg" alt="Telegram" className="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/myservice" target="_blank">
          <img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="https://facebook.com/myservice" target="_blank">
          <img src="/icons/facebook.svg" alt="Facebook" className="w-8 h-8" />
        </a>
      </div>
   
*/}
 </div>
    <form className="grid gap-4">
      <input type="text" placeholder="Ваше ім’я" className="animeD p-3 border border-black focus:border-blue-700 rounded" />
      <input type="email" placeholder="Email або телефон" className="p-3 border  border-black focus:border-blue-700  rounded" />
      <textarea placeholder="Ваше повідомлення" className="animeD p-3 border  border-black focus:border-blue-700 rounded h-32" />
      <button className="animeD bg-blue-600 text-white px-6 py-3 rounded  hover:bg-blue-700">
        Надіслати
      </button>
    </form>
  </div>
  
</section>
<section className='animeD bg-gray-500 py-16 px-4 sm:px-8 h-[100vh] w-[100%] flex justify-center items-center'>
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40502.12380890798!2d26.263552!3d50.620006399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f1388205971e1%3A0x507cbaba921bf0d4!2z0KDRltCy0L3QtdC90YHRjNC60LjQuSDQt9C-0L7Qu9C-0LPRltGH0L3QuNC5INC_0LDRgNC6!5e0!3m2!1suk!2sua!4v1752567541914!5m2!1suk!2sua"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

</section>

        </>
    )
}