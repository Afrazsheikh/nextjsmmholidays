// import LandingPage from "./components/LandingPage";

// export const metadata = {
//   title: "MM Holidays – Best Travel Packages",
//   description:
//     "Affordable domestic and international tour packages with MM Holidays",
// };

// export default function Home() {
//   return (
//     <main>
//       <LandingPage/>
//     </main>
//   );
// }
import PackageList from "./components/PackageList";

export const metadata = {
  title: "MM Holidays – Best Travel Packages",
  description: "Affordable domestic and international tour packages",
};

export default function Home() {
  return (
    <main>
      <PackageList />
    </main>
  );
}
