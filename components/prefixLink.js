import Link from "next/link";

export default function PrefixLink({
  href,
  children = undefined,
  rel = undefined,
}) {
  return (
    <Link rel={rel ? { rel } : ""} href={`/${process.env.linkPrefix}${href}`}>
      {children ? children : ""}
    </Link>
  );
}
