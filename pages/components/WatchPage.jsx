import Link from "next/link";

function WatchPage(props) {
  return (
    <div className="watch-page">
      <Link href="/">
        <span className="material-symbols-outlined watch-page-back-btn">keyboard_backspace</span>
      </Link>
      <div className="watch-display-area">
        <div className="watch-info">
          <h1>{props.movie.title}</h1>
          <h5>{props.movie.description}</h5>
        </div>
        <img className="watch-image" src={props.movie.image} alt="movie cover" />
      </div>
    </div>
  );
}

export default WatchPage;
