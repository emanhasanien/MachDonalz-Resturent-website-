import { SignIn } from "@clerk/clerk-react";
import React from "react";

const SignInPage = () => {
  return (
    <div className="h-screen flex justify-center">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        afterSignUpUrl="/"
        afterSignInUrl="/"
      />
    </div>
  );
};

export default SignInPage;
