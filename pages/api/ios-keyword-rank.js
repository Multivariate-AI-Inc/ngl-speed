export const runtime = "edge"
export default handler = async req => {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify(
        { error: "Only POST method allowed!!" },
        {
          status: 405,
          headers: { "Content-type": "application/json" },
        },
      ),
    )
  }
  try {
    const { keyword, country } = await req.json()
    console.log("Keyword & country", keyword, country)
    const data = await getKeywordRanks(keyword, country)
    return new Response(
      JSON.stringify(data, { status: 200, headers: "application/json" }),
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

const getKeywordRanks = async (keyword, country) => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    }
    const url = `https://itunes.apple.com/search?media=software&entity=software%2CsoftwareDeveloper&term=${keyword}&country=${country}&limit=30`
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching rank data", error)
    throw error
  }
}
