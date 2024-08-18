"use client"; 

import { useState } from "react";
import Image from 'next/image';
import RootLayout from "./layout";

export default function CookingPage() { 

  return (
      <main className="flex min-h-screen flex-col items-center justify-between" style={{ padding: 0 }}>

        <div className="video-container">
          <video src="/kabylakeIntroV3.mp4" autoPlay muted loop className="video-player" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
        </div>
        <div className="image-row-container"> 
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
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            margin-bottom: 20px; 
            position: relative;
            z-index: 5;
          }
          .video-player {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .image-row-container {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding: 0 10px;
          }
          .image-wrapper {
            position: relative;
            width: 25%;
            height: auto;
            padding-bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 10px;
          }
          .image-container :global(img.border-grey) {
            border: 2px solid grey;
            display: block;
            margin-bottom: 10px;
          }
        `}</style>
      </main>
  );
}