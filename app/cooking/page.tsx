"use client"; // This directive marks the component as a Client Component

import { useState } from "react";
import Image from 'next/image';
import RootLayout from "./layout";

export default function CookingPage() { // Renamed component
  // State to store the ticker symbol entered by the user
  const [ticker, setTicker] = useState('');
  // State to store any error message
  const [errorMessage, setErrorMessage] = useState('');

  return (
      <main className="flex min-h-screen flex-col items-center justify-between" style={{ padding: 0 }}>
        {/* Navigation bar would be here */}
        <div className="image-container">
          <div className="image-wrapper">
            <Image src="/setupkb.png" alt="Setup KB" className="border-grey" fill sizes="100vw 100%" />
          </div>
          <div className="image-wrapper">
            <Image src="/missiles.png" alt="Missiles" className="border-grey" fill sizes="100vw 100%" />
          </div>
          <div className="image-wrapper">
            <Image src="/dronekb.png" alt="Drone KB" className="border-grey" fill sizes="100vw 100%" />
          </div>
          <div className="image-wrapper">
            <Image src="/dexterinspo.png" alt="Dexter Inspo" className="border-grey" fill sizes="100vw 100%" />
          </div>
        </div>
        <style jsx>{`
          .image-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center; /* Center images horizontally */
          }
          .image-wrapper {
            position: relative; /* Required for fill prop */
            width: 100vw; /* Adjusted to take up 100% of viewport width */
            height: 100%;
            padding-bottom: 60%; /* Adjust based on aspect ratio */
            display: flex;
            justify-content: center; /* Center images horizontally */
            align-items: center; /* Center images vertically */
          }
          .image-container :global(img.border-grey) { // Changed class name and color
            border: 2px solid grey;
            display: block;
            margin-bottom: 10px; /* Adjust spacing between images as needed */
          }
        `}</style>
      </main>
  );
}