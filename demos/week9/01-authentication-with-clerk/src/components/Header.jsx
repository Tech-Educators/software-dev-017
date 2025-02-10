// I am going to use this Header component to set up the authentication interface for the user
"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <>
      <h1>Header</h1>

      <SignedIn>
        {/* this will show when the user is signed-in */}

        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* this will show when the user is signed-out or they don't have an account yet*/}
        <h2>If you have an account, please sign in</h2>
        <SignInButton />
        <h2>If you don't have an account, please sign up </h2>
        <SignUpButton />
      </SignedOut>
    </>
  );
}
