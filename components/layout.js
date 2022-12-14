import Head from "next/head";
import Image from "next/image";
import layoutStyles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import profilePic from "../public/imgs/profile.jpg";

const name = "Shivam Kumar Jha";
export const siteTitle = "Shivam's Next.js PlayGround";

export default function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <Head>
        <link rel="icon" href={`${process.env.pathPrefix}/favicon.ico`} />
        <meta
          name="description"
          content="Learning how to build a basic Next.js website"
        />
        <meta
          property="og:image"
          content={`https://og-imae.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={layoutStyles.header}>
        {props.home ? (
          <>
            <Image
              priority
              src={profilePic}
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={profilePic}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{props.children}</main>
      {!props.home && (
        <div className={layoutStyles.backToHome}>
          <Link href="/">??? Back to home</Link>
        </div>
      )}
    </div>
  );
}
