import Head from "next/head";
import PrefixLink from "../../components/prefixLink";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className="title">First Post</h1>
      <h2>
        <PrefixLink href="/">Home</PrefixLink>
      </h2>
    </Layout>
  );
}
