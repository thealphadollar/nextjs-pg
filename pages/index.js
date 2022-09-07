import Head from "next/head";
import PrefixLink from "../components/prefixLink";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPosts } from "../lib/posts";
import Date from "../components/date";

export async function getStaticProps() {
  let allPosts = await getSortedPosts();
  return {
    props: {
      allPosts,
    },
  };
}

export default function Home({ allPosts }) {
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
          Find the first post <PrefixLink href="/posts/first-post">here</PrefixLink>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Other Posts</h2>
        <ul className={utilStyles.list}>
          {allPosts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <PrefixLink href={`/posts/${id}`}><a>{title}</a></PrefixLink>
              <br/>
              <small className={utilStyles.lightText}><Date dateStr={date}/></small>
            </li>
            
          ))}
        </ul>
      </section>
    </Layout>
  );
}
