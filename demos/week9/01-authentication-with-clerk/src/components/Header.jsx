// I am going to use this Header component to set up the authentication interface for the user

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

//we have access to the clerk userId
import { auth } from "@clerk/nextjs/server";

export default function Header() {
  //we have destructered (extracted) the userId value from auth
  const { userId } = auth();
  return (
    <>
      <h1>Header</h1>
      {/* This is the userId value that clerk assigns to a user when they sign up */}
      {/* we can store this value in a database to relate it to posts, comments... */}
      <p>{userId}</p>
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
