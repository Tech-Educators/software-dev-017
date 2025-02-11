import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Sorry, this bird escaped our Joe&apos;s birds sanctuary</h1>
      <Link href={"/birds"} className="bg-amber-500">
        Find other birds here
      </Link>
    </>
  );
}
