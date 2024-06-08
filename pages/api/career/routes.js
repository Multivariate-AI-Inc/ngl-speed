import { getAllPosts } from "../../../lib/posts";
export const runtime = "experimental-edge";

export default function GET(req, res) {
  const postData = getAllPosts();
  res.status(200).json(postData);
}
