//I am going to use the SignUp component from clerk
import { SignUp } from "@clerk/nextjs";
export default function SignUpPage() {
  return (
    <>
      {/* You can customise this page further */}
      <h1>Welcome to Basics!</h1>
      <h2>Sign up, please, new user!</h2>
      <SignUp />
    </>
  );
}
