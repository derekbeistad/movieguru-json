import { signIn } from "next-auth/react";
import Link from "next/link";
import Header from "./Header";

export default function AccessDenied() {
  return (
    <div className="cover-section">
      <Header />
      <h1>Access Denied</h1>
      <p>You must be signed in to view this page</p>
      <Link
        href="/api/auth/signin"
        onClick={(event) => {
          event.preventDefault();
          signIn();
        }}
      >
        <button>Sign in</button>
      </Link>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
