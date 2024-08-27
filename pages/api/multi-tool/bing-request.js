const cheerio = require('cheerio');
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
    const data = await fetchBingSerpData(keyword, country)
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
  } catch (error) {
    console.error("Error fetching bingSERP data:", error)
    return new Response(JSON.stringify({ data: "" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

const fetchBingSerpData = async (keyword, country) => {
    try {
      const url = `https://www.bing.com/search?q=${encodeURIComponent(keyword)}&count=10&cc=${country}&setlang=en&go=Search&qs=ds&form=QBRE`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const htmlContent = await response.text();
      const data = await parseHtml(htmlContent)
      return data;
    } catch (error) {
      console.error('Error fetching or parsing Bing SERP data:', error);
      throw error;
    }
  };
  
 function parseHtml(htmlContent) {
    try {
      const $ = cheerio.load(htmlContent);
      const results = [];
  
      // Select the <ol> element with id "b_results"
      const olElement = $('#b_results');
  
      if (olElement.length) {
        // Select all <li> elements within the <ol> element
        const liElements = olElement.find('li');
  
        // Filter the <li> elements to those that have the class "b_algo"
        const bAlgoClassElements = liElements.filter((index, element) =>
          $(element).hasClass('b_algo')
        );
  
        // Iterate over the filtered <li> elements
        bAlgoClassElements.each((index, liElement) => {
          const h2Element = $(liElement).find('h2');
          if (h2Element.length) {
            const aElement = h2Element.find('a');
            const title = aElement.text().trim() || aElement.attr('title')?.trim() || '';
            const links = aElement.attr('href');
            let snippet = $(liElement).text().trim();
            if (snippet.length > 210) {
              snippet = snippet.substring(0, 210);
            }
            results.push({ title, links, snippet });
          }
        });
      } else {
        console.error('Could not find <ol id="b_results">');
      }
      return results;
    } catch (error) {
      console.log("Error parsing", error);
      return error;
    }
  }