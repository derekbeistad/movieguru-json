import Link from "next/link";
import SignInBtn from "./SignInBtn";
import { useState } from "react";
import AccountPopup from "./AccountPopup";

function BrowseNav() {
  // Setup popup state
  const [accountPopupDisplay, setAccountPopupDisplay] = useState("none");

  // Client-side mouse Event Detection
  if (typeof window !== "undefined") {
    const accountPopup = [...document.getElementsByClassName("account-popup")];
    accountPopup.map((popup) =>
      popup.addEventListener("mouseleave", handleMouseLeave)
    );
  }

  // Set popup state
  function handleMouseLeave() {
    setAccountPopupDisplay("none");
  }

  function handleClick() {
    setAccountPopupDisplay("inline-block");
  }

  return (
    <div className="nav">
      <div className="nav-left">
        <Link href="#movies" className="nav-link">
          Movies
        </Link>
        <Link href="#shows" className="nav-link">
          Shows
        </Link>
      </div>
      <div className="nav-right">
        <SignInBtn handleClick={handleClick} />
        <AccountPopup style={accountPopupDisplay} />
      </div>
    </div>
  );
}

export default BrowseNav;
