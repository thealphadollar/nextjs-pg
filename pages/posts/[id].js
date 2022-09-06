import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getPostById, getSortedPosts } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export default function Post(props) {
  return (
    <Layout>
      <Head>
        <title>{props.postData.title}</title>
      </Head>
      <div className={utilStyles.lightText}>
        <Date dateStr={props.postData.date} />
      </div>
      <br />
      <div className={utilStyles.headingLg}>{props.postData.title}</div>
      <br />
      <div
        dangerouslySetInnerHTML={{ __html: props.postData.htmlString }}
      ></div>
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
  const postData = await getPostById(params.id);
  return {
    props: {
      postData,
    },
  };
}
