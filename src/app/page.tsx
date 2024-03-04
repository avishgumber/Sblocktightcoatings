import Image from "next/image";
import HeroBanner2 from '../components/HeroBanner2'
import HeroBanner3 from "../components/HeroBanner3";
import HeroBanner4 from "../components/HeroBanner4";
import HeroBanner5 from "../components/HeroBanner5";
import HeroBanner6 from "../components/HeroBanner6";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hey</h1>
      </div>
      <HeroBanner2 />
      <HeroBanner3 />
      <HeroBanner4 />
      <HeroBanner5 />
      <HeroBanner6 />
    </main>
  );
}
