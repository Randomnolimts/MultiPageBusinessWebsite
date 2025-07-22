import Head from "next/head";
export default function SeoHead({  
  title = 'TechTune',
  description = 'Ремонт техніки з увагою до людей.',
  image = 'https://techtune.com/og/default.png',
  canonical = 'https://techtune.com',
}:{title?:string; description?:string; canonical?:string, image?:string}){
    return(
    <Head>
      {/* Title + Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Optionally: theme + favicon */}
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#000000" />
    </Head>

    )
} 