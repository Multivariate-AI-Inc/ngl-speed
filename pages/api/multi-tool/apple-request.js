export const runtime = "edge"
export default async function handler(req) {
  const url = new URL(req.url)
  const { keyword, country } = Object.fromEntries(url.searchParams.entries())

  if (!keyword || !country) {
    return new Response(JSON.stringify({ error: "Missing parameters" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }
  try {
    const data = await fetchAppleStoreData(keyword, country)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error fetching Apple store data:", error)
    return new Response(JSON.stringify({ data: ""}), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

const fetchAppleStoreData = async (keyword, country) => {

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  try {
    let response = await fetch(
      `https://itunes.apple.com/search?media=software&entity=software&term=${keyword}&country=${country}&limit=10`,
      requestOptions,
    )
    const data = await response.json();
    return data
  } catch (error) {
    console.error("Error fetching data", error)
    return error
  }
}
