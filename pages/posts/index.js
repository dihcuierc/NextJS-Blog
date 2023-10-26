import AllPosts from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/posts.util";
import Head from "next/head";
import { Fragment } from "react";

export default function AllPostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Post</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
