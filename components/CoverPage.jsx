import Link from "next/link";
import { useState } from "react";
import AccountPopup from "./AccountPopup";
import Heading from "./Heading";
import HeroButton from "./HeroButton";
import SignInBtn from "./SignInBtn";

function CoverPage() {
  // Set cover section's headings
  const coverHeading = {
    main: "Watch innovative feature films and engaging shows here.",
    secondary: "Watch now. Free forever.",
  };

  // Set Begin content
  const beginContent = {
    headingText: "Begin your journey below!",
    btnText: "Begin with Google",
  };

  // Setup account ppopup display
  const [accountPopupDisplay, setAccountPopupDisplay] = useState("none");

  // Client-side - mouse event detection
  if (typeof window !== "undefined") {
    const accountPopup = [...document.getElementsByClassName("account-popup")];
    accountPopup.map((popup) =>
      popup.addEventListener("mouseleave", handleMouseLeave)
    );
  }

  function handleMouseLeave() {
    setAccountPopupDisplay("none");
  }

  function handleClick() {
    setAccountPopupDisplay("inline-block");
  }

  return (
    <div className="cover-background">
      <div className="cover-section">
        <div className="cover-buttons">
          <Link href="#browse-section">
            <button>Browse</button>
          </Link>
          <SignInBtn handleClick={handleClick} />
          <AccountPopup style={accountPopupDisplay} />
        </div>
        <Heading content={coverHeading} />
        <HeroButton beginContent={beginContent} />
      </div>
    </div>
  );
}

export default CoverPage;
