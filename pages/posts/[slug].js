import Head from "next/head";
import { getPost, getSlugs } from "../../lib/posts";

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log('[ PostPage ] getStaticProps()');
  const post = await getPost(slug);

  return {
    props: { post },
  };
}

function PostPage({ post }) {
  
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
        <meta name=" PostPage" value=" PostPage" />
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>published on: {post.date}</p>
        <article dangerouslySetInnerHTML={{__html: post.body}} />
        
      </main>
    </>
    
  );
}

export default PostPage;
