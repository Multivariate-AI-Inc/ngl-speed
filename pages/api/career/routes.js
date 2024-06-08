import { getAllPosts } from "../../../lib/posts";

export default function GET(req, res) {
  const postData = getAllPosts();
  res.status(200).json(postData);
}
export const runtime = "nodejs" | "edge";
