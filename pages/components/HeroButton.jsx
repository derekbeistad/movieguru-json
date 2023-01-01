import Link from "next/link";

function HeroButton(props) {
  const { headingText, btnText } = props.beginContent;

  return (
    <div>
      <p>{headingText}</p>
      <Link href="/api/auth/signin">
        <button className="btn-begin">{btnText}</button>
      </Link>
    </div>
  );
}

export default HeroButton;
