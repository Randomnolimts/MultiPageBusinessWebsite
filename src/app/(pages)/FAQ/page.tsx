'use client'
import styles from './MyComponent.module.css';
import Link from 'next/link';
import SeoHead from '@/app/components/SeoHead';
import { useEffect } from 'react';
import Head from 'next/head';
export default function Contact(){
  useEffect(()=>{
  
    const  anime7 = document.querySelectorAll('.animeF')
   const masiv = [...anime7]
    console.log(masiv)
    const callback = (masiv: IntersectionObserverEntry[])=>{
       masiv.forEach(element => {
        if(element.isIntersecting){
           element.target.classList.add('anime2F')
        }else{
          element.target.classList.remove('anime2F')
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
        <Head><script type="application/ld+json">
{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Як замовити ремонт?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Просто заповніть форму на головній або на сторінці “Контакти”. Ми звʼяжемось протягом 10 хвилин!"
        }
      },
      {
        "@type": "Question",
        "name": "Скільки триває діагностика?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Базова діагностика займає до 30 хвилин. Складні випадки — до 24 годин"
        }
      }
      ,
      {
        "@type": "Question",
        "name": "Чи є гарантія на ремонт?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Так, ми надаємо гарантію 90 днів на всі замінені компоненти."
        }
      }
      ,
      {
        "@type": "Question",
        "name": "Чи можна спочатку отримати консультацію?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Звісно! Просто напишіть нам у чат, і ми проконсультуємо безкоштовно."
        }
      }
    ]
  })}
</script></Head>
        <SeoHead
  title="FAQ | TechTune — Часті питання про ремонт техніки"
  description="Дізнайтесь відповіді на найчастіші питання про діагностику, гарантії, консультації та способи оплати. TechTune — прозорий сервіс без зайвого."
  image="https://techtune.com/og/faq.png"
  canonical="https://techtune.com/faq"
/>
        <section className={styles.FAQ}>
            <div className=" w-[100%] h-[100vh] flex justify-center items-center flex-col animeF">
                <div className="bg-white rounded p-1 sm:p-2 md:p-3">
        <h1 className="text-[1.3rem] sm:text-[1.5rem] md:text-[3rem]  "><strong>FAQ</strong></h1></div>
        <div className="bg-white rounded">
        <h3 className="text-[1rem] sm:text-[1.5rem] md:text-[1.5rem]  text-gray-500 p-1 sm:p-2 md:p-3">Маєте питання? Ось відповіді на найчастіші</h3>
        </div>
              
                <div className='grid  gap-4 justify-center items-center grid-cols-[repeat(auto-fit, minmax(200px, 1fr))]'> 
          <div className=" p-1 sm:p-2 md:p-3 bg-gray-50 rounded w-auto h-auto border-2 border-black m-3  flex justify-center items-center flex-col text-black "><h3 className="text-[1.2rem] sm:text-[1rem] md:text-[1.5rem]    p-1 md:p-3">Як замовити ремонт?</h3>
          <p className="text-gray-600 mt-1 text-[0.7rem] sm:text-[1.2rem] md:text-[1rem]    p-1 md:p-3 text-wrap text-black ">Просто заповніть форму на головній або на сторінці “Контакти”. Ми звʼяжемось протягом 10 хвилин!</p>
</div>
          <div className="p-1 sm:p-2 md:p-3 bg-gray-50 rounded w-auto h-auto border-2 border-black m-3  flex justify-center items-center flex-col text-black"><h3 className="text-[1.2rem] sm:text-[1rem] md:text-[1.5rem]     p-1 md:p-3">Скільки триває діагностика?</h3>
          <p className="text-gray-600 mt-1 text-[0.7rem] sm:text-[1.2rem] md:text-[1rem]    p-1 md:p-3 text-wrap text-black">Базова діагностика займає до 30 хвилин. Складні випадки — до 24 годин</p>
</div>
        <div className="p-1 sm:p-2 md:p-3 bg-gray-50 rounded w-auto h-auto border-2 border-black m-3  flex justify-center items-center flex-col text-black"><h3 className="text-[1.5rem] sm:text-[1rem] md:text-[1.5rem]     p-1 md:p-3">Чи є гарантія на ремонт?</h3>
          <p className="text-gray-600 mt-1 text-[0.7rem] sm:text-[1.2rem] md:text-[1rem]   p-1 md:p-3 text-wrap text-black">Так, ми надаємо гарантію 90 днів на всі замінені компоненти.</p>
</div>
        <div className="p-1 sm:p-2 md:p-3 bg-gray-50 rounded w-auto h-auto border-2 border-black m-3  flex justify-center items-center flex-col text-black"><h3 className="text-[1.5rem] sm:text-[1rem] md:text-[1.5rem]     p-1 md:p-3">Чи можна спочатку отримати консультацію?</h3>
          <p className="text-gray-600 mt-1 text-[0.7rem] sm:text-[1.2rem] md:text-[1rem]    p-1 md:p-3 text-wrap text-black">Звісно! Просто напишіть нам у чат, і ми проконсультуємо безкоштовно.</p>
</div>
</div>
        </div>
        </section>
        <section className={styles.section2}>
               <div className={styles.minmax}>
            <div className='border-black border-solid border-2 p-5  sm:p-10 md:p-20 rounded-xl animeF'>
             
            <h2 className="text-[1.3rem] sm:text-[1.5rem] md:text-[3rem]"><strong> Гарантія та політика ремонту </strong></h2>
                 <h3 className="text-[1rem] sm:text-[1.3rem] md:text-[2rem]"><strong>Яка гарантія на ремонт? </strong></h3>
                 <h4 className="text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] text-gray-600">Ми надаємо 90 днів гарантії на всі замінені компоненти. Якщо щось піде не так — просто зверніться, і ми вирішимо це безкоштовно. Надійність для нас — не просто слово.
</h4>
</div>
            </div>
        </section>
         <section className={`${styles.section3} gap-2 sm:gap-3 md:gap-4`}>
            <div className="w-[100%]  flex justify-center items-center flex-col animeF ">
      <h1 className="text-[1.3rem] sm:text-[1.5rem] md:text-[3rem]"><strong>Оплата та доставка</strong></h1>

      <h3 className="text-[1rem] sm:text-[1.5rem] md:text-[1.5rem] text-gray-600 p-1 sm:p-2 md:p-3 m-4 sm:m-5 md:m-6">
        Усе про способи оплати, терміни доставки та умови отримання
      </h3>
 
</div>
<div className="grid sm:grid-cols-1 md:grid-cols-4 grid-cols-2 gap-2 m-4 sm:m-5 md:m-6">

    
  <div className="aspect-square  rounded-lg  p-4 flex flex-col justify-center border-black border-2 ">
    
    <p className="text-xl text-center mb-2">💻 Ремонт ноутбуків</p>
    <p className="text-[0.7rem] sm:text-sm text-gray-600 text-center ">
      Проводимо детальну діагностику ноутбуків, виявляємо апаратні й програмні несправності. Замінюємо роз’єми живлення, порти USB/HDMI, клавіатури, петель та матриць.
    </p>
  </div>


   {/* 🦠 Видалення вірусів */}
  <div className="aspect-square  rounded-lg  p-4 flex flex-col justify-center border-black border-2 ">
    <p className="text-xl text-center mb-2">🦠 Видалення вірусів</p>
    <p className="text-[0.7rem] sm:text-sm text-gray-600 text-center">
      Очищаємо систему від шкідливого програмного забезпечення, налаштовуємо антивірусний захист, покращуємо швидкодію, відновлюємо стабільну роботу ОС.
    </p>
  </div>

  {/* 🔧 Оновлення програм */}
  <div className="aspect-square rounded-lg  p-4 flex flex-col justify-center border-black border-2 ">
    <p className="text-xl text-center mb-2">🔧 Оновлення програм</p>
    <p className="text-[0.7rem] sm:text-sm text-gray-600 text-center">
      Встановлюємо та оновлюємо драйвери, Windows або Linux, офісні пакети, утиліти, браузери — усе, що потрібно для комфортної роботи.
    </p>
  </div>

  {/* 🧩 Заміна компонентів */}
  <div className="aspect-square  rounded-lg  p-4 flex flex-col justify-center border-black border-2 ">
    <p className="text-xl text-center mb-2">🧩 Заміна компонентів</p>
    <p className="text-[0.7rem] sm:text-sm text-gray-600 text-center">
      Апгрейд комп’ютера: встановлення SSD, оперативної пам’яті, відеокарти або блоку живлення. Робимо сучасну техніку зі старого заліза!
    </p>
  </div>





        </div>

    </section>
    <section className={styles.moreQuestions}>
  <div className="w-full h-[100vh] flex justify-center items-center flex-col bg-gray-400 px-4 text-center animeF ">
    <div className="max-w-[700px]">
      <h2 className="text-[1.3rem] sm:text-[1.5rem] md:text-[2rem] font-semibold mb-4 text-gray-800">
        Маєте ще запитання?
      </h2>
      <p className="text-[0.9rem] sm:text-[1.2rem] md:text-[1rem] text-gray-600 text-wrap mb-6">
        Якщо не знайшли відповідь або хочете уточнити деталі — просто перейдіть на сторінку <strong><Link href = '/contacts'>“Contacts”</Link></strong>. Ми завжди на зв’язку й готові допомогти!
      </p>
      <a href="/contacts" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
        Перейти на “Contacts”
      </a>
    </div>
  </div>
</section>
        </>
    )
}