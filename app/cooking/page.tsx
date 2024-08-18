"use client"; // This directive marks the component as a Client Component

import Image from "next/image";
import { useState, useEffect } from "react";
import getPriceApi from "../components/liveprice";

export default function Home() {
  // State to store the fetched price
  const [price, setPrice] = useState(0);
  // State to store the ticker symbol entered by the user
  const [ticker, setTicker] = useState('');
  // State to store the last successfully fetched ticker symbol
  const [lastFetchedTicker, setLastFetchedTicker] = useState('');
  // State to store any error message
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Function to fetch the price of the ticker symbol
    const fetchPrice = async () => {
      // Check if ticker is 6 letters long and contains only letters
      if (/^[A-Za-z]{6}$/.test(ticker)) { 
        try {
          // Fetch the price from the API
          const price = await getPriceApi(ticker);
          // Update the price state with the fetched price
          setPrice(parseFloat(price.price));
          // Update the last fetched ticker state
          setLastFetchedTicker(ticker);
          // Clear any previous error message
          setErrorMessage('');
        } catch (error) {
          // Set error message if fetching price fails
          setErrorMessage('Failed to fetch price');
        }
      }
    };

    // Call the fetchPrice function
    fetchPrice();
  }, [ticker]); // Only run when ticker changes

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Background and logo section */}
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* Main content section */}
      <div className="flex flex-col gap-y-8 p-2 items-center justify-center h-screen">
        {/* Display the fetched price */}
        <p className="text-primary text-3xl ">
          {price}
        </p>
        {/* Display the last fetched ticker symbol */}
        <p className="text-secondary">
          CURRENT TICKER: {lastFetchedTicker}
        </p>

        {/* Input field for the user to enter a ticker symbol */}
        <input value={ticker} onChange={(e) => setTicker(e.target.value)} placeholder='enter a ticker' className="text-primary bg-input-primary h-fit w-[100px]  border border-primary rounded-md flex items-center mx-autos p-2 ml-8" />

        {/* Display any error message */}
        <p className="text-red-accent mt-4">
          {errorMessage}
        </p>
      </div>
    </main>
  );
}