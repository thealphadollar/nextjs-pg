import Link from "next/link";

export default function PrefixLink({ href, as = href, children = undefined, rel = undefined }) {
  return (
    <Link rel={(rel) ? {rel} : ''} href={href} as={`${process.env.linkPrefix}${as}`}>
      {children ? children: ''}
    </Link>
  );
}
