import Link from "next/link";

function Footer() {
  return (
    <footer>
      <p className="attributes">
        Photos From <Link href="https://unsplash.com">UnSplash</Link>
      </p>
      <p className="attributes">
        Icons from <Link href="https://www.flaticon.com/">FlatIcon</Link>
      </p>
    </footer>
  );
}

export default Footer;
