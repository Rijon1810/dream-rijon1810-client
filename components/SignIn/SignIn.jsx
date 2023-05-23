import Link from "next/link";

const SignIn = () => {
  return (
    <Link href="/" legacyBehavior>
      <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
        Sign In
      </a>
    </Link>
  );
};

export default SignIn;
