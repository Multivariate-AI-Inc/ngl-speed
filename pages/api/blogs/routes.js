import { getAllPosts } from "../../../lib/posts";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req) {
  try {
    const postData = await getAllPosts();
    return new Response(JSON.stringify(postData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch posts" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
