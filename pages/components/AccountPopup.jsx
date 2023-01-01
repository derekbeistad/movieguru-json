import { useSession } from "next-auth/react";
import Image from "next/image";

function AccountPopup(props) {
  // Get session
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="account-popup" style={{ display: `${props.style}` }}>
        <Image
          className="account-img"
          src={session.user.image}
          height={75}
          width={75}
          alt="profile"
        />
        <h5>{session.user.name}</h5>
      </div>
    );
  }
}

export default AccountPopup;
