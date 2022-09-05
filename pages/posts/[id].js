import Layout from "../../components/layout";
import { getSortedPosts } from "../../lib/posts";

export default function Post(props) {
  return <Layout></Layout>;
}

export async function getStaticPaths() {
  return await getSortedPosts(true);
}

export async function getStaticProps({ params }) {
    
}
