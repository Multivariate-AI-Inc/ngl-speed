import { useState } from "react";
import { getAllPosts } from "../../lib/posts";

const LoadMoreButton = ({ posts, setPosts, loading, setLoading }) => {
  // ------------------------------STATE FOR END OF BLOGS------------------------------

  const [endOfBlogs, setEndOfBlogs] = useState(false);
  //------------------------------LOAD MORE FUNCTION------------------------------
  async function loadMoreBlogs() {
    // -------------------------SETTING LOADING STATE TO TRUE----------------------------------------------------------------
    // setting loading state to true
    setLoading(true);
    // ------------------------------FETCHING BLOGS USING GETALLPOSTS FUNCTION--------------------------------
    // fetching more posts (it takes endCursor and number of posts to be fetched as arguements)
    const morePosts = await getAllPosts(posts.pageInfo.endCursor, 6);

    // ------------------------------UPDATING THE POSTS OBJECT------------------------------
    // initialising object for updated posts
    let updatedPosts = {
      pageInfo: {},
      nodes: [],
    };
    //------------------------------UPDATING PAGEINFO PROPERTY------------------------------
    // updating pageinfo for updated posts
    updatedPosts.pageInfo = morePosts.pageInfo;
    // pushing the previous posts to updatedposts nodes array
    posts.nodes.map((node) => {
      updatedPosts.nodes.push(node);
    });
    // -----------------------------------------------------------------------------------------

    // checking if there is a next page and if endcursor is not null
    if (posts.pageInfo.hasNextPage && posts.pageInfo.endCursor !== null) {
      // -----------------------------------------------------------------------------------------

      // updating the fetched posts
      morePosts.nodes.map((node) => updatedPosts.nodes.push(node));
      // -----------------------------------------------------------------------------------------

      //  updating the posts object
      setPosts(updatedPosts);
      // -----------------------------------------------------------------------------------------
      // setting loading state to false
      setLoading(false);
    }
    if (!morePosts.pageInfo.hasNextPage) {
      setLoading(false);
      setEndOfBlogs(true);
    }
    // setting loading state to false
  }
  return (
    <button
      className="btn btn-brand-1-full hover-up custom-btn-size"
      onClick={loadMoreBlogs}
      disabled={loading || endOfBlogs}
    >
      {!loading
        ? endOfBlogs
          ? "Keep Visiting For Future Blogs"
          : " Load More Blogs"
        : "Loading..."}
    </button>
  );
};

export default LoadMoreButton;
