import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPosts } from "../lib/posts";

export async function getStaticProps() {
  const allPosts = getSortedPosts();
  return {
    props: {
      allPosts,
    },
  };
}

export default function Home({ allPosts }) {
  console.log(allPosts);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Shivam is a fullstack developer, learning Next.js</p>
        <p>
          (This is a sample website built using the official{" "}
          <Link href="https://nextjs.org/learn">next.js tutorial</Link>.)
        </p>
        <p>
          Find the first post <Link href="/posts/first-post">here</Link>.
        </p>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Other Posts</h2>
          <ul className={utilStyles.list}>
            {allPosts.map(({id, date, title}) => (
              <li className={utilStyles.listItem} key={id}>
                {date} {title}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </Layout>
  );
}
