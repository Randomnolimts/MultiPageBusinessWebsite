'use client'
import { Oswald } from "next/font/google"
import SeoHead from "./components/SeoHead"
import obj from "./components/messages.json"
import { useEffect, useState } from "react"
import Head from 'next/head';
import Image from "next/image"
{/*шрифти*/}
const oswald  = Oswald({
    subsets: ['vietnamese'],
    weight: '600',

})
{/*сторінка*/}
export default function Home(){
    useEffect(()=>{
      const elements = [...document.querySelectorAll('.anime')]
          const callback =(elements:IntersectionObserverEntry[])=>{
    elements.forEach((el)=>{
      if(el.isIntersecting){
        el.target.classList.add("anime2")
      }else{
        el.target.classList.remove('anime2')
      }
    })
    }
    const observer  = new IntersectionObserver(callback, {
      threshold: 0.5
    })
    console.log(document.querySelector('.home'))
    elements.forEach((el)=>{observer.observe(el)})
    }, [])

  const [num, setNum] = useState(0)
const messege = () => {
   console.log(obj[num])
   if(obj[num] != undefined){
  return (
    <>
    <div className="flex justufy-center items-center"><div className="relative w-10 h-10  sm:w-20 sm:h-20  lg:w-20 lg:h-20 mb-5   "><Image src={`${obj[num]['href']}`} alt = "avatar" className="rounded-full" fill priority></Image></div> {/*<img src={`${obj[num]['href']}`} alt="" className="w-10 h-10  sm:w-20 sm:h-20 lg:w-20 lg:h-20 mb-5 rounded-full " />*/}<p className=" text-[1rem] sm:text-[1.5rem] lg:text-[1.5rem] ">{obj[num]['name'] }</p></div>
    <p className=" text-[0.8rem] sm:text-[1.5rem] lg:text-[1.5rem]  fadeIn">{obj[num]['comment']}</p>
       <p className=" text-[0.7rem] sm:text-[1rem] lg:text-[1rem] ">{obj[num]['date']}</p>
       </>
  )
   } else {setNum(0)}



}
 useEffect(()=>{
  const home2 = document.querySelector<Element>('.home2')
  console.log(home2)
  const  anime2 = document.querySelectorAll('.animeA')
  const masiv = [...anime2]
  console.log(masiv)
  const callback = (masiv: IntersectionObserverEntry[])=>{
     masiv.forEach(element => {
      if(element.isIntersecting){
         element.target.classList.add('anime2A')
      }else{
        element.target.classList.remove('anime2A')
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
 useEffect(()=>{
  const home3 = document.querySelector<Element>('.home3')
  console.log(home3)
  const  anime3 = document.querySelectorAll('.animeB')
  const masiv = [...anime3]
  console.log(masiv)
  const callback = (masiv: IntersectionObserverEntry[])=>{
     masiv.forEach(element => {
      if(element.isIntersecting){
         element.target.classList.add('anime2B')
      }else{
        element.target.classList.remove('anime2B')
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
 useEffect(()=>{
  const home4 = document.querySelector<Element>('.home4')
  console.log(home4)
  const  anime4 = document.querySelectorAll('.animeC')
  const  masiv = [...anime4]
  console.log(masiv)
  const callback = (masiv: IntersectionObserverEntry[])=>{
     masiv.forEach(element => {
      if(element.isIntersecting){
         element.target.classList.add('anime2C')
      }else{
        element.target.classList.remove('anime2C')
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
        "image": "https://techtune.com/og/home.png",
        "url": "https://techtune.com",
        "telephone": "+380XXXXXXXXX",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ваша адреса",
          "addressLocality": "Ваше місто",
          "addressCountry": "UA"
        },
        "description": "Сервісний центр із ремонту комп’ютерної техніки. Діагностика, апгрейд, видалення вірусів, гарантія.",
        "openingHours": "Mo-Sa 09:00-19:00",
        "priceRange": "$$",
        "areaServed": "Україна",
        "sameAs": [
          "https://facebook.com/techtune",
          "https://instagram.com/techtune"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "120"
        },
        "serviceType": [
          "Ремонт ноутбуків",
          "Ремонт комп’ютерів",
          "Видалення вірусів",
          "Оновлення програм",
          "Заміна компонентів"
        ]
      })
    }}
  />
</Head>
<SeoHead
  title="TechTune — Ремонт ноутбуків та комп’ютерів з гарантією"
  description="Швидко, надійно та чесно. TechTune — сервісний центр із ремонту комп’ютерної техніки з 2021 року. Діагностика, апгрейд, видалення вірусів — усе під контролем."
  image="https://techtune.com/og/home.png"
  canonical="https://techtune.com"
  
 />


    <section className="home ">
     <div className={` ${oswald.className} block w-[100%]  lg:w-[50%] xl:w-[30%] h-[100vh] bg-grey`}>

        <h1 className="text-[1.5rem] lg:text-[1.7rem] black inline w-[80%] anime">
           Computer & Laptop Repair — Fast, Reliable, Guaranteed
     </h1>
     <h2 className="text-[1rem] lg:text-[1.4rem] black inline w-[80%] anime ">
       Welcome to our service center’s website! We specialize in professional repair of computer equipment, regardless of the complexity. Whether your device is lagging, overheating, or not turning on at all — we know exactly what to do.
     </h2>

</div>
    </section>
    <section className="home2">
        <div className={`  ${oswald.className} block2 `}>
            <h2 className=" text-[2.5rem] text-white ">Наші послуги</h2>
           <section className="text-white ">


<div className="grid xl:grid-cols-4 grid-cols-2 nest:grid-cols-2 gap-2 nest:gap-1">
  <div className="animeA aspect-square bg-[#1C1C1C] rounded-lg text-white p-4 nest:p-2 flex flex-col justify-center">
    <p className="text-xl nest:text-base lg:text-[2rem] xl:text-xl text-center mb-2">💻 Ремонт ноутбуків</p>
    <p className="text-[0.7rem] nest:text-[0.6rem] lg:text-[1.5rem] xl:text-[1rem] text-gray-300 text-center">
      Проводимо детальну діагностику ноутбуків, виявляємо апаратні й програмні несправності. Замінюємо роз’єми живлення, порти USB/HDMI, клавіатури, петель та матриць. Робимо це професійно та з гарантією.
    </p>
  </div>
  <div className="animeA aspect-square bg-[#1C1C1C] rounded-lg text-white p-4 nest:p-2 flex flex-col justify-center">
    <p className="text-xl nest:text-base lg:text-[2rem] xl:text-xl text-center mb-2">🦠 Видалення вірусів</p>
    <p className="text-[0.7rem] nest:text-[0.6rem] lg:text-[1.5rem] xl:text-[1rem] text-gray-300 text-center">
      Очищаємо систему від шкідливого програмного забезпечення, налаштовуємо антивірусний захист, покращуємо швидкодію, відновлюємо стабільну роботу ОС.
    </p>
  </div>
  <div className="animeA aspect-square bg-[#1C1C1C] rounded-lg text-white p-4 nest:p-2 flex flex-col justify-center">
    <p className="text-xl nest:text-base lg:text-[2rem] xl:text-xl text-center mb-2">🔧 Оновлення програм</p>
    <p className="text-[0.7rem] nest:text-[0.6rem] text-gray-300 text-center lg:text-[1.5rem] xl:text-[1rem]">
      Встановлюємо та оновлюємо драйвери, Windows або Linux, офісні пакети, утиліти, браузери — усе, що потрібно для комфортної роботи.
    </p>
  </div>
  <div className="animeA aspect-square bg-[#1C1C1C] rounded-lg text-white p-4 nest:p-2 flex flex-col justify-center">
    <p className="text-xl nest:text-base lg:text-[2rem] xl:text-xl text-center mb-2">🧩 Заміна компонентів</p>
    <p className="text-[0.7rem] nest:text-[0.6rem] text-gray-300 text-center lg:text-[1.5rem] xl:text-[1rem]">
      Апгрейд комп’ютера: встановлення SSD, оперативної пам’яті, відеокарти або блоку живлення. Робимо сучасну техніку зі старого заліза!
    </p>
  </div>
</div>

</section>

        </div>

    </section>
    <section className={`  ${oswald.className} home3`}>
      <h2 className="text-white text-[2.5rem]">Чому ми</h2>
      <div className="block3 grid xl:grid-cols-4 grid-cols-2 gap-2">

<div className="animeB aspect-square  rounded-lg text-white p-4 flex flex-col justify-center items-center">
<div className="relative w-10 h-10 lg:w-20 lg:h-20 mb-5">
  <Image
    src="/icons/timer.png"
    alt="speed"
    fill
    className="object-contain"
  />
</div>

<p className="text-[1rem] lg:text-[1.5rem] xl:text-[1rem]">Швидкий ремонт
Вирішуємо більшість проблем упродовж 24–48 годин. Економимо ваш час.</p></div>
<div className="animeB aspect-square rounded-lg text-white p-4 flex flex-col justify-center items-center">

<div className="relative w-10 h-10 lg:w-20 lg:h-20 mb-5">
  <Image
    src="/icons/verifed.png"
    alt="verified"
    fill
    className="object-contain"
  />
</div>

<p className="text-[1rem] lg:text-[1.5rem] xl:text-[1rem]">
Гарантія на роботи
Надаємо офіційну гарантію на всі послуги. Ви отримуєте не просто результат — а впевненість.</p></div>
<div className="animeB aspect-square  rounded-lg text-white p-4 flex flex-col justify-center items-center">
<div className="relative w-10 h-10 lg:w-20 lg:h-20 mb-5">
  <Image
    src="/icons/skill.png"
    alt="skill"
    fill
    className="object-contain"
  />
</div>

<p className="text-[1rem] lg:text-[1.5rem] xl:text-[1rem]">
Досвідчені майстри
Сертифіковані фахівці з багаторічним досвідом. Знаємо як відновити навіть “мертву” техніку.</p></div>
<div className=" animeB spect-square  rounded-lg text-white p-4 flex flex-col justify-center items-center">
<div className="relative w-10 h-10  lg:w-20 lg:h-20 mb-5">
  <Image
    src="/icons/response.png"
    alt="response"
    fill
    className="object-contain"
  />
</div>

<p className="text-[1rem] lg:text-[1.5rem] xl:text-[1rem]">Безкоштовна консультація
Пояснюємо причину несправності, даємо пораду без зайвого нав’язування.
</p></div>
</div>
</section>
<section className={`home4  ${oswald.className}`}>
      <h2 className=" text-white text-[1.5rem]  sm:text-[2.5rem] lg:text-[2.5rem]">
        Чесні відгуки клієнтів
    </h2>
  <div className="block4 text-white  text-[2.5rem] flex  flex-col justify-center items-center">
    
<div className="animeC chat-bubble max-w-[80%]">
  <div>{messege()}</div>

  </div>
  <button className = "h-[auto] w-[auto] bg-[gray]  p-2 lg:p-3 rounded self-center text-[2rem] sm:text-[3rem] lg:text-[3rem] " onClick = {()=>{setNum(num + 1)}}>Next</button>
  </div>
 
</section>
<section className="min-h-screen bg-gray-100 lg:py-24 py-12 px-6 flex items-center justify-center">
  <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg lg:p-12 p-6">
    <h2 className="text-3xl lg:text-[3.5rem] lg:text-4xl font-bold text-gray-800 mb-10 text-center">
      Замовити ремонт пристрою 🔧
    </h2>

    <form className="space-y-8 text-[1.1rem]">
      <div>
        <p className="text-center font-semibold text-gray-700 mb-2 text-2xl lg:text-3xl">Ім’я користувача</p>
        <input
          type="text"
          placeholder="Ваше ім’я"
          className="block w-full max-w-lg mx-auto rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 py-3 px-4 text-[1.1rem] lg:text-xl"
        />
      </div>

      <div>
        <p className="text-center font-semibold text-gray-700 mb-2 text-2xl lg:text-3xl">Тип пристрою</p>
        <select
          className="block w-full max-w-lg mx-auto rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 py-3 px-4 text-[1.1rem] lg:text-xl"
        >
          <option>Ноутбук</option>
          <option>Комп’ютер</option>
          <option>Інше</option>
        </select>
      </div>

      <div>
        <p className="text-center font-semibold text-gray-700 mb-2 text-2xl lg:text-3xl">Опис проблеми</p>
        <textarea
          rows={4}
          placeholder="Що саме не працює?"
          className="block w-full max-w-lg mx-auto rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none py-3 px-4 text-[1.1rem]  lg:text-xl"
        ></textarea>
      </div>

      <div>
        <p className="text-center font-semibold text-gray-700 mb-2 text-2xl lg:text-3xl">Контактний номер</p>
        <input
          type="tel"
          placeholder="+380..."
          className="block w-full max-w-lg mx-auto rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 py-3 px-4 text-[1.1rem] lg:text-xl"
        />
      </div>

<div className="w-full flex justify-center">
  <button
    type="submit"
    className="max-w-lg w-full py-4 px-6 bg-blue-600 text-white text-[1.1rem] font-semibold rounded-md hover:bg-blue-700 transition-all"
  >
    Відправити заявку
  </button>
</div>
    </form>
  </div>
</section>

    </>
    )
}
  {/* 14:40 */}