import React from "react";
import { FaEthereum, FaFire, FaNodeJs } from "react-icons/fa";
import { SiRust, SiWebpack, SiTailwindcss, SiSupabase, SiJest, SiReact } from "react-icons/si";

const items = [
  { label: "Solidity", icon: <FaEthereum style={{ color: "#627eea" }} /> },
  { label: "Rust", icon: <SiRust style={{ color: "#dea584" }} /> },
  { label: "Ethereum", icon: <FaEthereum style={{ color: "#627eea" }} /> },
  { label: "EVM", icon: <SiWebpack style={{ color: "#8ed6fb" }} /> },
  { label: "Solana", icon: <FaFire style={{ color: "#fbbf24" }} /> },
  { label: "Webpack", icon: <SiWebpack style={{ color: "#8ed6fb" }} /> },
  { label: "Redis", icon: <FaNodeJs style={{ color: "#689f63" }} /> },
];

const items2 = [
  { label: "shadcn/ui", icon: <SiReact style={{ color: "#61dafb" }} /> },
  { label: "Material UI", icon: <SiReact style={{ color: "#61dafb" }} /> },
  { label: "TailwindCSS", icon: <SiTailwindcss style={{ color: "#38bdf8" }} /> },
  { label: "Firebase", icon: <FaFire style={{ color: "#ffca28" }} /> },
  { label: "Supabase", icon: <SiSupabase style={{ color: "#3ecf8e" }} /> },
  { label: "Jest", icon: <SiJest style={{ color: "#c21325" }} /> },
];

const items3 = [
  { label: "Solidity", icon: <FaEthereum style={{ color: "#627eea" }} /> },
  { label: "Rust", icon: <SiRust style={{ color: "#dea584" }} /> },
  { label: "Ethereum", icon: <FaEthereum style={{ color: "#627eea" }} /> },
  { label: "EVM", icon: <SiWebpack style={{ color: "#8ed6fb" }} /> },
  { label: "Solana", icon: <FaFire style={{ color: "#fbbf24" }} /> },
  { label: "Webpack", icon: <SiWebpack style={{ color: "#8ed6fb" }} /> },
  { label: "Redis", icon: <FaNodeJs style={{ color: "#689f63" }} /> },
];

const InfiniteScrollAnimation = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap shadow-2xl ">
      {/* Animasi scroll ke kiri */}
      <div className="flex animate-infinite-scroll mb-7">
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-flex rounded-2xl border px-3 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer items-center gap-2 font-extralight font-sans mr-4 text-xl"
          >
            {item.icon}
            <span>{item.label}</span>
          </span>
        ))}
        {/* Duplikasi untuk memastikan scroll terus-menerus */}
        {items.map((item, index) => (
          <span
            key={`dup-${index}`}
            className="inline-flex rounded-2xl border px-3 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer items-center gap-2 font-extralight font-sans mr-4 text-xl"
          >
            {item.icon}
            <span>{item.label}</span>
          </span>
        ))}
      </div>

      {/* Animasi scroll ke kanan */}
      <div className="flex animate-infinite-scroll-right mb-4">
        {items2.map((item, index) => (
          <span
            key={index}
            className="inline-flex rounded-2xl border px-3 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer items-center gap-2 font-extralight font-sans mr-4 text-xl"
          >
            {item.icon}
            <span>{item.label}</span>
          </span>
        ))}
        {/* Duplikasi untuk memastikan scroll terus-menerus */}
        {items2.map((item, index) => (
          <span
            key={`dup2-${index}`}
            className="inline-flex rounded-2xl border px-3 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer items-center gap-2 font-extralight font-sans mr-4 text-xl"
          >
            {item.icon}
            <span>{item.label}</span>
          </span>
        ))}
      </div>

      {/* Animasi scroll ke kiri lagi */}
      <div className="flex animate-infinite-scroll mb-7">
        {items3.map((item, index) => (
          <span
            key={index}
            className="inline-flex rounded-2xl border px-3 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer items-center gap-2 font-extralight font-sans mr-4 text-xl"
          >
            {item.icon}
            <span>{item.label}</span>
          </span>
        ))}
        {/* Duplikasi untuk memastikan scroll terus-menerus */}
        {items3.map((item, index) => (
          <span
            key={`dup3-${index}`}
            className="inline-flex rounded-2xl border px-3 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer items-center gap-2 font-extralight font-sans mr-4 text-xl"
          >
            {item.icon}
            <span>{item.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollAnimation;
