import { getPostData } from "../../../lib/posts";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req) {
  try {
    const url = req.url.split("/api/")[1].split("/routes")[0];
    const postData = await getPostData(url);

    return new Response(JSON.stringify(postData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch post data" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
