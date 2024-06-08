import { getAllPosts } from "../../../lib/posts";

export default async function GET(req, res) {
  const postData = await getAllPosts();
  res.status(200).json(postData);
}
