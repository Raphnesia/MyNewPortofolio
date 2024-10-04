import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { IoHome } from "react-icons/io5";
import Image from "next/image";
import TechStack from "@/components/TechStack";
import KembangProject from "@/components/KembangProject";




export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Beranda', link: '/', icon: <IoHome />},
          {name: 'Tentang Saya', link: '/', icon: <IoHome />},
          {name: 'Tentang Saya', link: '/', icon: <IoHome />},
        ]} 
        />
        
        <Hero />
        <TechStack />
        <KembangProject />
      </div>
    </main>
  );
}
