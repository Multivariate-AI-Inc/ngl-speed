import Head from "next/head";

const PageHead = ({ title, ogDescription, ogType, canonical, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo.svg" />
      <meta
        name="robots"
        content="noindex, nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="description"
        content={
          ogDescription
            ? ogDescription
            : "Our App Store Optimization and App Advertising tools will help you grow your app. Reach out to us, and we'll super-power your app growth."
        }
      />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:type" content={ogType ? ogType : "website"} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={
          ogDescription
            ? ogDescription
            : "Our App Store Optimization and App Advertising tools will help you grow your app. Reach out to us, and we'll super-power your app growth."
        }
      />
      <meta
        property="og:url"
        content={canonical ? canonical : "https://nextgrowthlabs.com/"}
      />
      <meta property="og:site_name" content="Next Growth Labs" />
      <meta
        property="article:modified_time"
        content="2023-09-18T14:13:16+00:00"
      />
      <meta
        property="og:image"
        content={image ? image : "/assets/imgs/template/logo.svg"}
      />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:type" content="image/jpeg" />
      {/*Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://nextgrowthlabs.com/" />

      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={
          ogDescription
            ? ogDescription
            : "Our App Store Optimization and App Advertising tools will help you grow your app. Reach out to us, and we'll super-power your app growth."
        }
      />
      <meta
        name="twitter:image"
        content={image ? image : "/assets/imgs/template/logo.svg"}
      />
      <meta content="NGL v.1.0" name="generator" />
      <meta
        name="facebook-domain-verification"
        content="bpk7feigxufcq70bhicrhui3fgkf8m"
      />
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="google-site-verification"
        content="LaXlaGxPYORNhZiERBF3T3hp4ulscGwquOArKpQ38n8"
      />
      <meta
        name="msapplication-TileImage"
        content="https://nextgrowthlabs.com/wp-content/uploads/2021/11/cropped-nextlogo-270x270.jpeg"
      />
      <link rel="canonical" href={canonical} />
    </Head>
  );
};

export default PageHead;
// "https://nextgrowthlabs.com/"
