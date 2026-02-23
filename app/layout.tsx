import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApplyGlobalStyles from "./components/ApplyGlobalStyles";
import WelcomeCard from "./components/WelcomeCards";
import Script from "next/script";

export const metadata = {
  title: "MM Holidays",
  description: "Best travel packages",
  verification: {
    google: "7Ud9nnwIsGAt5lMuV9_DSnD920yNNmwmhfCd_6wHYtY", 
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const res = await fetch(
  `${process.env.NEXT_PUBLIC_SITE_URL}/api/settings`,
  { cache: "no-store" }
);

  if (!res.ok) {
    throw new Error("Failed to fetch settings");
  }

  const settings = await res.json();
console.log(settings);

  return (
    <html lang="en">
      <body>
        
        {/* Apply MAIN body background */}
        <ApplyGlobalStyles
          backgroundImageUrl={settings.backgroundImageUrl}
        />

        <Header />
        <main>{children}</main>
        <Footer />
         {/* ✅ Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

      </body>
    </html>
  );
}
