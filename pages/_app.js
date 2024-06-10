import { GoogleTagManager } from "@next/third-parties/google";
import "../public/assets/css/style.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-538RX7C" />
    </>
  );
}

export default MyApp;
