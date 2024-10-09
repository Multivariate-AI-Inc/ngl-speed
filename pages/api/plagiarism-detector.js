export const runtime = "edge"
export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    })
  }
  const { input } = await req.json();
  if (!input) {
    return new Response(JSON.stringify({ error: "Missing parameters" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  try {
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
  const url = 'https://mltools.ws.multivariate.ai/plagiarism_detector';
  const headers = {
    'Authorization': 'Basic bWx0b29sc191c2VyOnk0WVU1R3RnbldxOW8wakxyUzMrVzNKNzJsdWVjWG56eEJYVTczSnVlWTQ9',
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  const urlencoded = new URLSearchParams();
  urlencoded.append("submit", "Submit");
  urlencoded.append("text", input);
  urlencoded.append("api", "true");

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: urlencoded,
    redirect: "follow"
  };
  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error('Unable to make the API request.');
    }
    const responseData = await response.text();
    return responseData;
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}

