import { graphqlRequest } from "./graphqlRequest";

export async function getAllPosts(endCursor = null, numberOfPosts = 12) {
  const condition = `after: "${endCursor}", first: ${numberOfPosts}, where: {orderby: {field: DATE, order: DESC}}`;
  const query = {
    query: `query getAllPosts {
      posts(${condition}) {
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        nodes {
          date
          excerpt
          slug
          title
          featuredImage {
            node {
              mediaDetails {
                sizes {
                  width
                  sourceUrl
                  height
                }
                file
              }
            }
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }`,
  };
  const data = await graphqlRequest(query);
  const allPosts = await data.data.posts;
  return allPosts;
}

export async function getPostData(slug) {
  const query = {
    query: `query singlePost {
      post(
        id: "${slug}",
        idType: SLUG
      ) {
        date
        title(format: RENDERED)
        content(format: RENDERED)
        excerpt(format: RENDERED)
        modified
        slug
        featuredImage {
          node {
            mediaDetails {
              sizes {
                height
                sourceUrl
                width
              }
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
          seo {
            metaDesc
            title
            fullHead
          }
        author {
          node {
            name
            slug
          }
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  const postData = resJson.data.post;
  return postData;
}

export async function getPostSlug() {
  const query = {
    query: `query postSlug {
      posts(first:100) {
        nodes {
          slug
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.posts.nodes;
  return slugs;
}
