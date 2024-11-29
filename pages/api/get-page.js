export const runtime = "edge"
export default async function handler(req) {
    if (req.method !== "POST") {
        return new Response(
            JSON.stringify({ error: "Only POST requests are allowed" }),
            {
                status: 405,
                headers: { "Content-Type": "application/json" },
            },
        )
    }

    const { url, robotTxt } = await req.json()
    if (!url) {
        return new Response(JSON.stringify({ error: "Missing parameters" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        })
    }

    try {
        const data = await getPageContent(url, robotTxt)
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        })
    } catch (error) {
        console.error("Error:", error)
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        })
    }
}

const getPageContent = async (url, robotTxt = false) => {
    try {
        let apiUrl = robotTxt ? `https://js-apis.maakeetoo.com/page-seo/get-page?url=${url}/robots.txt` : `https://js-apis.maakeetoo.com/page-seo/get-page?url=${url}`;
        const authHeader = 'Basic ' + Buffer.from(`${process.env.JS_API_USER_NAME}:${process.env.JS_API_PASSWORD}`).toString('base64');
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': authHeader,
            }
        }
        const response = await fetch(apiUrl, requestOptions)
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        throw new Error(`Error fetching meta data: ${error}`)
    }
}