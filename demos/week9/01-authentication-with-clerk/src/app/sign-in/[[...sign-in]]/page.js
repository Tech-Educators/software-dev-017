//I am going to use the SignIn component from clerk
import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <>
      {/* You can customise this page further */}
      <h1>Welcome to Basics!</h1>
      <h2>Sign in, please!</h2>
      <SignIn />
    </>
  );
}
