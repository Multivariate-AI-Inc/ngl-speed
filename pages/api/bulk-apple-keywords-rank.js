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
    const { keywords, country, applicationId } = await req.json()
    const data = await getBulkAppleKeywordsRanks(keywords, applicationId, country)
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

async function getBulkAppleKeywordsRanks(keywords, appId, country, lang = "en") {
    const rankData = [];
    const keywordChunks = chunkArray(keywords, 50);
    for (const chunk of keywordChunks) {
        const chunkData = await getRanksParallel(chunk, appId, country);
        rankData.push(...chunkData);
        break; 
    }
    return rankData;
}

async function getRanksParallel(keywords, appId, country) {
    const requests = keywords.map(keyword => {
        const requestURL = `https://itunes.apple.com/search?media=software&entity=software%2CsoftwareDeveloper&term=${encodeURIComponent(keyword)}&country=${encodeURIComponent(country)}&limit=100`;

        return fetch(requestURL)
            .then(response => response.json())
            .then(data => {
                if (!data || !data.results) {
                    return { [keyword]: 'N/A' };
                } else {
                    const result = data.results.find((item, index) => item.trackId === appId);
                    if (result) {
                        const rank = data.results.indexOf(result) + 1;
                        return { [keyword]: rank };
                    } else {
                        return { [keyword]: 'N/A' };
                    }
                }
            })
            .catch(error => ({ [keyword]: 'N/A' })); 
    });

    return Promise.all(requests);
}

// Helper function to chunk array into smaller arrays of a specified size
function chunkArray(array, size) {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + size));
    }
    return chunked;
}

