import { error } from "console";

export const runtime = "edge";

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Only POST method allowed!!" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  // Get data from the request body
  const { keywords, country } = await req.json();
  console.log("Testing keyword", keywords, country);

  // Prepare the API URL
  const apiUrl = `https://js-apis.maakeetoo.com/gSerp/?gl=${country}&hl=en`;

  try {
    // Make the POST request to the external API
    const externalResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keywords: keywords,
      }),
    });

    // Handle the response from the external API
    const fullData = await externalResponse.json();
    if (!fullData) {
      return new Response(
        JSON.stringify({ message: "Error fetching Google search results" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Return the full data to the client
    return new Response(JSON.stringify(fullData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle errors with the external request
    return new Response(
      JSON.stringify({
        message: "Error fetching Google search results2",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
