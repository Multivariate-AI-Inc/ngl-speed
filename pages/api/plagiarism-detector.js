export const runtime = "edge"
export default async function handler(req) {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
      })
    }
    // const { input } = req.body;
    const { input } = await req.json();
  if (!input) {
    return new Response(JSON.stringify({ error: "Missing parameters" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  try {
    // const data = await detectPlagiarism(input)
    const data = await getPlagiarismDetectorData(input)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error detecting plagiarism:", error)
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

async function getPlagiarismDetectorData(input) {
  const encodedDynamicText = encodeURIComponent(input);
  const url = 'https://mltools.ws.multivariate.ai/plagiarism_detector';
  const data = `text=${encodedDynamicText}&submit=Display%20Output`;
  const headers = {
    'Authorization': 'Basic bWx0b29sc191c2VyOnk0WVU1R3RnbldxOW8wakxyUzMrVzNKNzJsdWVjWG56eEJYVTczSnVlWTQ9',
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: data
    });

    if (!response.ok) {
      throw new Error('Unable to make the API request.');
    }

    const responseData = await response.text();
    return responseData;
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}
