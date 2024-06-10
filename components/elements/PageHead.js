import Head from "next/head";
import Script from "next/script";

const PageHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo.svg" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="description"
        content="Our App Store Optimization and App Advertising tools will help you grow your app. Reach out to us, and we'll super-power your app growth."
      />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="NextGrowthLabs - Best App Store Optimization Platform"
      />
      <meta
        property="og:description"
        content="Our App Store Optimization and App Advertising tools will help you grow your app. Reach out to us, and we'll super-power your app growth."
      />
      <meta property="og:url" content="https://nextgrowthlabs.com/" />
      <meta property="og:site_name" content="Next Labs" />
      <meta
        property="article:modified_time"
        content="2023-09-18T14:13:16+00:00"
      />
      <meta
        property="og:image"
        content="https://nextgrowthlabs.com/wp-content/uploads/2021/11/cropped-nextlogo.jpeg"
      />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta content="NGL v.1.0" name="generator" />
      <meta
        name="facebook-domain-verification"
        content="bpk7feigxufcq70bhicrhui3fgkf8m"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <meta
        name="google-site-verification"
        content="LaXlaGxPYORNhZiERBF3T3hp4ulscGwquOArKpQ38n8"
      />
      <meta
        name="msapplication-TileImage"
        content="https://nextgrowthlabs.com/wp-content/uploads/2021/11/cropped-nextlogo-270x270.jpeg"
      />
      {/* <!-- Google Tag Manager --> */}
      {/* <Script
        id="gtm"
        strategy="afterInteractive"
      >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NH5RFSKJ');`}</Script> */}
      {/* <!-- End Google Tag Manager --> */}
    </Head>
  );
};

export default PageHead;
