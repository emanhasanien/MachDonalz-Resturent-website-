import { SignUp } from "@clerk/clerk-react";
const SignUpPage = () => {
  return (
    <div>
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        afterSignUpUrl="/"
        afterSignInUrl="/"
      />
    </div>
    </div>
  )
}

export default SignUpPage
