import SignInForm from "./SignInForm";

export default function SignIn() {
  return (
    <>
      <h2 className="font-bold text-white text-4xl font-bold text-theme md:text-7xl text-center">
        Sign In
      </h2>
      <p className="text-md font-light text-foreground md:text-xl  lg:text2xl text-center mt-2 md:mt-5 text-white">
        Sign in below to start taking notes.
      </p>
      <SignInForm />
    </>
  );
}
