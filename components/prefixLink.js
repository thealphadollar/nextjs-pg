import Link from "next/link";

export default function PrefixLink({ href, as = href, children }) {
  return (
    <Link href={href} as={`${process.env.linkPrefix}${as}`}>
      {children}
    </Link>
  );
}
