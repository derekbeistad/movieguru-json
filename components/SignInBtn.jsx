import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function SignInBtn(props) {
  // Get session
  const { data: session, status } = useSession();

  function handleClick() {
    props.handleClick();
  }

  if (session) {
    return (
      <>
        <button className="btn-secondary" onClick={() => signOut()}>
          Sign out
        </button>
        <Image
          className="profile-img"
          onClick={handleClick}
          src={session.user.image}
          height={45}
          width={45}
          alt="profile"
        />
      </>
    );
  }
  return (
    <>
      <button className="btn-secondary" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}

export default SignInBtn;
