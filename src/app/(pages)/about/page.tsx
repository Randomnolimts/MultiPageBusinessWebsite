'use client'
import { useEffect } from 'react';
import styles from './MyComponent.module.css';
import Head from 'next/head';
import SeoHead from '@/app/components/SeoHead';
import { Oswald } from "next/font/google"
import Image from 'next/image';
    const oswald  = Oswald({
    subsets: ['vietnamese'],
    weight: '600',

})
export default function About(){
 useEffect(()=>{

  const  anime6 = document.querySelectorAll('.animeE')
  const masiv = [...anime6]
  console.log(masiv)
  const callback = (masiv: IntersectionObserverEntry[])=>{
     masiv.forEach(element => {
      if(element.isIntersecting){
         element.target.classList.add('anime2E')
      }else{
        element.target.classList.remove('anime2E')
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
              "@type": "Organization",
              "name": "TechTune",
              "url": "https://techtune.com/about",
              "logo": "https://techtune.com/og/about.png",
              "description": "TechTune — команда фахівців із ремонту комп’ютерної техніки. Діагностика, точність і людське ставлення. З 2021 року вдихаємо життя в пристрої.",
              "member": [
                {
                  "@type": "Person",
                  "name": "Іван",
                  "jobTitle": "Технік-аналітик",
                  "description": "Діагностує проблеми техніки з 2019 року. Девіз: “Якщо відкрити комп — то тільки з повагою.”"
                },
                {
                  "@type": "Person",
                  "name": "Олена",
                  "jobTitle": "Майстерка з точності",
                  "description": "Акуратна заміна, пайка, увага до деталей. Ваш пристрій у безпеці."
                },
                {
                  "@type": "Person",
                  "name": "Марк",
                  "jobTitle": "Майстер мікроскопічної точності",
                  "description": "Вирішує найдрібніші поломки під мікроскопом. Лабораторія точності."
                }
              ],
              "sameAs": [
                "https://facebook.com/techtune",
                "https://instagram.com/techtune"
              ]
            })
          }}
        />
      </Head>
        <SeoHead
  title="Про команду | TechTune"
  description="Познайомтесь із фахівцями TechTune — діагностика, точність і людське ставлення. З 2021 року ми вдихаємо життя в комп’ютерну техніку."
  image="https://techtune.com/og/about.png"
  canonical="https://techtune.com/about"
/>

<title>About</title>


        <section className={styles.home6}>
            <div className='animeE flex justify-center items-center flex-col'>
            <div className={`${styles.block7} `}>
                <div className='bg-[#171717] rounded w-auto h-auto p-3'>
        <h1 className="text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] text-white">Хто ми такі</h1>
        </div>
        <div className = "relative w-50 h-50 sm:w-70 sm:h-70 md:w-100 md:h-100 ld:w-150 ld:h-150 mb-5">
<Image  fill alt = "Фото команди" src = "/about/team.png" />
        </div>
      { /* <img
alt = "team"
src="/about/team.png"
className="w-60 h-60 sm:w-13 sm:h-13 md:w-150 md:h-150 mb-5  "
></img>*/}

        </div>
        <div className="bg-[#171717] rounded w-auto h-auto p-1 sm:p-4 md:p-5 lg:p-8  sm:max-w-[80%]  max-w-[90%] md:max-w-[60%]">
        <h2 className='text-[1rem] sm:text-[0.7rem] md:text-[1.3rem] lg: text-[1.3rem] text-white max-w-[40%] md:max-w-[60%] p-1 sm:p-2 md:p-3 lg:p-3 inline'>Ми — команда, яка робить ремонт техніки простим, чесним і ефективним.
З 2021 року ми працюємо над тим, щоб кожен пристрій отримував друге життя: ноутбуки, комп’ютери, планшети — ми ремонтуємо з увагою до деталей і людей.
Ми віримо, що хороший сервіс — це не просто якісний ремонт, а й комфортне спілкування, швидка відповідь і людське ставлення.
За кожною заявкою — реальна людина з потребою, і ми ніколи не забуваємо про це. Саме тому наші клієнти повертаються і радять нас друзям.
</h2>
</div>
</div>
        </section>
        <section className={styles.home7}>
            <div className={`${styles.block7a} flex-col md:flex-row animeE`}>



<div className='flex flex-col max-w-[80%] md:max-w-[40%] bg-[#C4BEBB] rounded w-auto h-auto p-3 order-2 md:order-1'><strong><h2 className='text-[1rem] sm:text-[1.5rem] md:text-[2rem]  md:max-w-[60%] inline'>
 Іван — Технік-аналітик
</h2></strong>
<p className='text-[0.8rem] sm:text-[1.3rem] md:text-[1.5rem] '>
Іван — людина, яка завжди знає, де закопано глюк. З 2019 року діагностує проблеми техніки швидше, ніж вона встигає сказати “синій екран”.
Любить чіткість, порядок і коли шлейфи лежать ідеально. Саме він перевіряє, чи працює все не лише зовні, а й “в нутрощах”.
Його девіз: “Якщо відкрити комп — то тільки з повагою.”

</p></div>

<div className=" relative w-60 h-90 sm:w-13 sm:h-13 md:w-100 md:h-150 mb-5 "><Image alt="first member" src="/about/first.png" fill  priority/></div>



            </div>
        </section>
                <section className={styles.home8}>
            <div className={`${styles.block7a} flex-col md:flex-row animeE`}>
<div className="relative w-60 h-90 sm:w-13 sm:h-13 md:w-100 md:h-150 mb-5">
<Image 
alt = "second member"
src="/about/second.png" 
fill 
priority />
</div>
           {/*             <img
alt = "team"
src="/about/second.png"
className="w-80 h-120 sm:w-13 sm:h-13 md:w-100 md:h-150 mb-5   "
></img>
           */}
<div className='flex flex-col max-w-[80%] md:max-w-[40%] bg-[#161615] rounded w-auto h-auto p-3 '><strong><h2 className='text-[1rem] sm:text-[1.5rem] md:text-[2rem]  md:max-w-[60%] inline'>
Олена — Майстерка з точності


</h2></strong>

<p className='text-[0.8rem] sm:text-[1.3rem] md:text-[1.5rem] '>
Олена діагностує неполадки точніше, ніж тестер — швидко, але з увагою. З 2019 року займається ремонтом із теплом і педантичністю.
Її сильні сторони — акуратність, логіка та вміння відновити пристрій так, щоб він працював не «як новий», а краще, ніж до поломки.
Любить, коли плати сяють, а пайка — рівна.
Її девіз: “Якщо щось виправляти — то з повагою до власника і техніки.”



</p></div>

            </div>
        </section>

  <section className={styles.home7}>
            <div  className={`${styles.block7a} flex-col md:flex-row animeE`}>



<div className='flex flex-col max-w-[80%] md:max-w-[40%] bg-[#C4BEBB] rounded w-auto h-auto p-3 order-2 md:order-1'><strong><h2 className='text-[1rem] sm:text-[1.5rem] md:text-[2rem]  md:max-w-[60%] inline'>
Марк — Майстер мікроскопічної точності
</h2></strong>
<p className='text-[0.8rem] sm:text-[1.3rem] md:text-[1.5rem]'>
Те, що інші не бачать — він виправляє під мікроскопом.
Марк — той, хто вміє впоратись із найдрібнішими поломками: мікросхеми, конектори, плати, гнізда — все це його територія.
Працює з мобільними, планшетами, MacBook’ами — і завжди знаходить рішення, навіть коли “ні в кого не вийшло”.
Його робоче місце — це лабораторія точності, а кожен ремонт — як хірургічна операція.
</p></div>
<div className="relative w-60 h-90 sm:w-13 sm:h-13 md:w-100 md:h-150 mb-5 ">
  <Image 
src="/about/third.png"
alt = "third member"
fill
priority>
  </Image></div>
                  {/*      <img
alt = "team"
src="/about/third.png"
className="w-80 h-120 sm:w-13 sm:h-13 md:w-100 md:h-150 mb-5  "
></img>*/}
            </div>
        </section>
<section className={`${oswald.className} ${styles.home10}`}>
  <h2 className="text-[1.5rem] sm: text-[2rem] md:text-[2.5rem] text-black">Чому ми</h2>
  <div className="animeE block3 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-2 gap-2">
    
    {/* Діагностика */}
    <div className="aspect-square rounded-lg p-4 flex flex-col justify-center items-center">
      <div className="relative w-10 h-10 sm:w-13 sm:h-13 md:w-20 md:h-20 mb-5">
        <Image
          src="/icons/loupe.png"
          alt="Іконка діагностики — лупа"
          fill
          className="object-contain"
          priority
        />
      </div>
      <p className="text-[1.rem]  md:text-[2rem] text-center mb-2 text-black">Діагностика</p>
      <p className="text-[0.8rem]  md:text-[1.5rem] text-center text-black">
        Встановлюємо та оновлюємо драйвери, Windows або Linux, офісні пакети, утиліти, браузери — усе, що потрібно для комфортної роботи.
      </p>
    </div>

    {/* Узгодження */}
    <div className="aspect-square rounded-lg p-4 flex flex-col justify-center items-center">
      <div className="relative w-10 h-10 sm:w-13 sm:h-13 md:w-20 md:h-20 mb-5">
        <Image
          src="/icons/agreement.png"
          alt="Іконка узгодження — рука з договором"
          fill
          className="object-contain"
          priority
        />
      </div>
      <p className="text-[1.rem]  md:text-[2rem] text-center mb-2 text-black">Узгодження</p>
      <p className="text-[0.8rem]  md:text-[1.5rem] text-center text-black">
        Пояснюємо все без технічного жаргону, погоджуємо терміни та вартість.
      </p>
    </div>

    {/* Ремонт */}
    <div className="aspect-square rounded-lg p-4 flex flex-col justify-center items-center">
      <div className="relative w-10 h-10 sm:w-13 sm:h-13 md:w-20 md:h-20 mb-5">
        <Image
          src="/icons/fix.png"
          alt="Іконка ремонту — гайковий ключ"
          fill
          className="object-contain"
          priority
        />
      </div>
      <p className="text-[1.rem]  md:text-[2rem] text-center mb-2 text-black">Ремонт</p>
      <p className="text-[0.8rem]  md:text-[1.5rem]  text-center text-black">
        Працюємо швидко, чисто і без зайвих “втручань”.
      </p>
    </div>

    {/* Перевірка */}
    <div className="aspect-square rounded-lg p-4 flex flex-col justify-center items-center">
      <div className="relative w-10 h-10 sm:w-13 sm:h-13 md:w-20 md:h-20 mb-5">
        <Image
          src="/icons/monitor.png"
          alt="Іконка перевірки — монітор"
          fill
          className="object-contain"
          priority
        />
      </div>
      <p className="text-[1.rem]  md:text-[2rem] text-center text-center mb-2 text-black">Перевірка</p>
      <p className="text-[0.8rem]  md:text-[1.5rem]  text-center text-black">
        Тестуємо роботу, оновлення, батарею, зарядку — усе під контролем.
      </p>
    </div>

  </div>
</section>

        </>
    )
}