// TODO: This is an example of how to create a page with static content in Next.js
// Leaving this file for future reference
import Script from "next/script"; // Used only as an example of how next/script <Script /> is implemented
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      {/* equivalent of html <head></head>. In Next.js it is a component */}
      <Head>
        <title>First Post</title>
      </Head>
      {/* equivalent of html <script> that goes in the <head></head> */}
      {/* Used only as an example of how next/script <Script /> is implemented
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      */}

      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
