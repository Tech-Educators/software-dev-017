"use client";
//error pages are client components!

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <>
      <p>{error.message}</p>
      <button
        onClick={() => {
          reset();
        }}
      >
        Try again
      </button>
      <Link href={"/"} className="text-emerald-500">
        If you&apos;ve tried to fix it, and it does not work, go somewhere safe
      </Link>
    </>
  );
}
