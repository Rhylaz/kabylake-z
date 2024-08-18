"use client";

import Image from "next/image";
import Counter from "./components/counter";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-w-screen flex-col items-center justify-between">
      <Navbar />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex p-10">
        <Counter />
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="grid"></div>
      </div>
      <style jsx>{`
        .grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: zoomRotatePan 30s infinite;
        }
        @keyframes rotate {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
        @keyframes zoomRotatePan {
          0% {
            transform: scale(1) rotate(0deg) translate(0, 0);
          }
          25% {
            transform: scale(1.2) rotate(90deg) translate(150px, 150px);
          }
          50% {
            transform: scale(1) rotate(180deg) translate(0, 0);
          }
          75% {
            transform: scale(1.2) rotate(180deg) translate(-350px, -350px);
          }
          100% {
            transform: scale(1) rotate(360deg) translate(0, 0);
          }
        }
      `}</style>
    </main>
  );
}