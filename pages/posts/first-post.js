import Head from "next/head";
import { getPost } from "../../lib/post";

export async function getStaticProps() {
  console.log('[ FirstPostPage ] getStaticProps()');
  const post = await getPost('first-post');

  return {
    props: { post },
  };
}

function FirstPostPage({ post }) {
  
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
        <meta name="First PostPage" value="First PostPage" />
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>published on: {post.date}</p>
        <article dangerouslySetInnerHTML={{__html: post.body}} />
        
      </main>
    </>
    
  );
}

export default FirstPostPage;
