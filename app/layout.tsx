import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApplyGlobalStyles from "./components/ApplyGlobalStyles";
import WelcomeCard from "./components/WelcomeCards";

export const metadata = {
  title: "MM Holidays",
  description: "Best travel packages",
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
      </body>
    </html>
  );
}
