import axios from "axios"

// Function to get the price of a given ticker symbol from the API
export default async function getPriceApi(ticker) {
    // Construct the URL for the API request
    const url = `https://api.xylex.ai/data/realtime/price?symbol=${ticker}&api_key=123`;
    
    // Make the GET request to the API
    const response = await axios.get(url);

    // Log the response status to the console for debugging purposes
    console.log(`Response status: ${response.status}`); // Added line to print response status

    // Check if the response status is not 200 (OK)
    if (response.status !== 200) {
        // Throw an error if the request was not successful
        throw new Error(`Failed to fetch the price: ${response.status}`);
    }

    // Return the data from the response
    return response.data;
} 