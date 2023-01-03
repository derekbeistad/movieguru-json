import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import WatchPage from "../../../components/WatchPage";
import { useRouter } from "next/router";
import movies from "../../../data/movies";
import shows from "../../../data/shows";
import { useSession } from "next-auth/react";
import AccessDenied from "../../../components/accessDenied";

function Watch(props) {
  let foundMovie = "";
  const movie = useRouter().query;

  // Get movie to display
  if (movie.movieType === "movie") {
    foundMovie = movies.find((x) => x.title === movie.movieTitle);
  } else {
    foundMovie = shows.find((x) => x.title === movie.movieTitle);
  }

  // Get session
  const { data: session, status } = useSession();
  const loading = status === "loading";
  console.log(loading);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied
  if (!session) {
    return <AccessDenied />;
  } else {
    // If session exists, display content
    return (
      <div>
        <Header />
        <WatchPage movie={foundMovie} />
        <Footer />
      </div>
    );
  }
}

export default Watch;
