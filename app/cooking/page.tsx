"use client"; // This directive marks the component as a Client Component

import { useState } from "react";
import Image from 'next/image';
import RootLayout from "./layout";

export default function Home() {
  // State to store the ticker symbol entered by the user
  const [ticker, setTicker] = useState('');
  // State to store any error message
  const [errorMessage, setErrorMessage] = useState('');

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Navigation bar would be here */}
        <div className="image-container">
          <div className="image-wrapper">
            <Image src="/setupkb.png" alt="Setup KB" className="border-red" fill sizes="100vw 100%" />
          </div>
          <div className="image-wrapper">
            <Image src="/missiles.png" alt="Missiles" className="border-red" fill sizes="100vw 100%" />
          </div>
          <div className="image-wrapper">
            <Image src="/dronekb.png" alt="Drone KB" className="border-red" fill sizes="100vw 100%" />
          </div>
          <div className="image-wrapper">
            <Image src="/dexterinspo.png" alt="Dexter Inspo" className="border-red" fill sizes="100vw 100%" />
          </div>
        </div>
        <style jsx>{`
          .image-container {
            width: 100%;
          }
          .image-wrapper {
            position: relative; /* Required for fill prop */
            width: 100%;
            height: 100%;
            padding-bottom: 60%; /* Adjust based on aspect ratio */
          }
          .image-container :global(img.border-red) {
            border: 2px solid red;
            display: block;
            margin-bottom: 10px; /* Adjust spacing between images as needed */
          }
        `}</style>
      </main>
  );
}