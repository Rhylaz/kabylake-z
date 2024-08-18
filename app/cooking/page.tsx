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
        <div className="video-container">
          <video src="/kabylakeIntroV3.mp4" autoPlay muted loop className="video-player"></video> {/* Added loop attribute */}
        </div>
        <div className="image-row-container"> {/* New container for row layout */}
          <div className="image-wrapper">
            <Image src="/missiles.png" alt="Missiles" className="border-grey" layout="responsive" width={100} height={100} />
          </div>
          <div className="image-wrapper">
            <Image src="/dronekb.png" alt="Drone KB" className="border-grey" layout="responsive" width={100} height={100} />
          </div>
          <div className="image-wrapper">
            <Image src="/dexterinspo.png" alt="Dexter Inspo" className="border-grey" layout="responsive" width={100} height={100} />
          </div>
        </div>
        <style jsx>{`
          .video-container {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 20px; /* Adjust spacing as needed */
          }
          .video-player {
            width: 100%; /* Make video take full width */
            height: auto;
          }
          .image-row-container { /* New styles for row layout */
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center; /* Center images horizontally */
            padding: 0 10px; /* Add padding between images */
          }
          .image-wrapper {
            position: relative; /* Required for responsive layout */
            width: 25%; /* Adjusted to take up 25% of the container width */
            height: auto; /* Maintain aspect ratio */
            padding-bottom: 0; /* Remove padding-bottom */
            display: flex;
            justify-content: center; /* Center images horizontally */
            align-items: center; /* Center images vertically */
            margin: 0 10px; /* Add horizontal padding between images */
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