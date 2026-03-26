import "./globals.css";
import Script from "next/script";
import { Lexend } from "next/font/google";
import LayoutWrapper from "./component/LayoutWrapper";
import AuthProvider from "./context/AuthContext";
import { ScrollTop } from "primereact/scrolltop";
import AutoBlogSchema from "./component/AutoBlogSchema";
import DynamicGraphSchema from "./component/DynamicGraphSchema";
import DynamicOgUrl from "./component/DynamicOgUrl";

const lexend = Lexend({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/* Google Fonts - Lexend */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* <meta
          name="google-site-verification"
          content="V0mdAX8hlunZwWTldPuYmZ4_zyd3DDh5z2nbFl89dVA"
        /> */}
        {/* ✅ Open Graph Meta Tags */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:title" content="Driver on Hire | Rent a Driver Online | Professional Driver Service" />
        <meta property="og:description" content="Driver On Hire - Rent a driver online. Professional drivers. Trained drivers. 24x7 On-demand Service. Book Driver on Call: 022-43439090" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.driveronhire.com/" />
        <DynamicOgUrl />
        <meta property="og:image" content="https://www.driveronhire.com/logo.svg" />
        <meta property="og:site_name" content="Driver On Hire" />

        {/* ✅ Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Driver on Hire | Rent a Driver Online | Professional Driver Service" />
        <meta name="twitter:site" content="@Driver On Hire" />
        <meta name="twitter:description" content="Driver On Hire - Rent a driver online. Professional drivers. Trained drivers. 24x7 On-demand Service. Book Driver on Call: 022-43439090" />
        <meta name="twitter:image" content="https://www.driveronhire.com/logo.svg" />

        {/* <meta
          name="description"
          content="Driver On Hire - Rent a driver online. Professional drivers. Trained drivers. 24x7 On-demand Service. Book Driver on Call: 022-43439090."
        /> */}
        {/* Next JS Already Includes */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          crossOrigin="anonymous"
        />
        {/* Favicon */}
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />

        {/* Apple touch icon */}
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />

        {/* Android Icon */}
        <link rel="icon" type="image/png" sizes="48x48" href="/icons/android-icon-48x48.png" />

        {/* Microsoft Icons */}
        <link rel="icon" type="image/png" sizes="144x144" href="/icons/ms-icon-144x144.png" />

        {/* Web app manifest */}
        <link rel="manifest" href="/icons/site.webmanifest" />

        {/* Optional: Web app icons for various sizes */}
        <link rel="icon" href="/icons/web-app-manifest-192x192.png" sizes="192x192" />
        <link rel="icon" href="/icons/web-app-manifest-512x512.png" sizes="512x512" />

        {/* <title>
          Driver on Hire | Rent a Driver Online | Professional Driver Service
        </title> */}
        <DynamicGraphSchema />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PBDW6LN7');
          `}
        </Script>
        {/* End Google Tag Manager */}
        {/* push notification */}
        <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></Script>
        <Script id="onesignal-init" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.OneSignalDeferred = window.OneSignalDeferred || [];
              OneSignalDeferred.push(async function(OneSignal) {
                // Only initialize OneSignal on production domain
                if (window.location.hostname === 'www.driveronhire.com') {
                  await OneSignal.init({
                    appId: "c2a6b957-45f1-4b3f-8e85-c41ad0e2ea8f",
                  });
                }
              });
            `,
          }}
        />

        {/* push notification */}
      </head>
      <body className={lexend.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBDW6LN7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Bootstrap and Google Maps Scripts */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&loading=async`}
          strategy="afterInteractive"
        />
        {/* Facebook Pixel */}
        {/* <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){
                  n.callMethod? n.callMethod.apply(n,arguments) : n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '8418266954949482');
                fbq('track', 'PageView');
            `,
          }}
        /> */}
        <AuthProvider>
          <LayoutWrapper>
            {children}
            <AutoBlogSchema />
          </LayoutWrapper>
        </AuthProvider>
        <ScrollTop />

      </body>
    </html>
  );
}
