import Link from "next/link";

function Header() {
  return (
    <div>
      <Link href="/" className="header-title">
        MovieGuru
      </Link>
    </div>
  );
}

export default Header;
