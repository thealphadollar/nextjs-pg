import Layout from "../../components/layout";
import { getPostById, getSortedPosts } from "../../lib/posts";

export default function Post(props) {
  return (
  <Layout>
    {props.postData.id}
    <br/>
    {props.postData.title}
    <br/>
    {props.postData.date}
  </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getSortedPosts(true);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostById(params.id);
  return {
    props: {
      postData
    }
  }
}
