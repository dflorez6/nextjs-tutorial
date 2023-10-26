import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts"; // Import the function that returns an array of post IDs
import Date from "../../components/date"; // Date component
import utilStyles from "../../styles/utils.module.scss";

// Post Component that gets rendered
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

// Function used to generate dynamic url /posts/<id>
export async function getStaticPaths() {
  // paths - contains the array of known paths returned by getAllPostIds(), which include the
  // params defined by pages/posts/[id].js
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
  };
}

// The Post page is now using the getPostData function in getStaticProps to get the post data and return it as props
// Used by the Post component to fetch Post data from .md file with ID and is used by component to render the post
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
