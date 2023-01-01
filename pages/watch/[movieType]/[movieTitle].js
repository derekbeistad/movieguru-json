import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WatchPage from "../../components/WatchPage";
import { useRouter } from "next/router";
import connectMongo from "../../../utils/connectMongo";
import Show from "../../../models/showModel";
import Movie from "../../../models/movieModel";
import { useSession } from "next-auth/react";

import AccessDenied from "../../components/accessDenied";

export const getServerSideProps = async () => {
  try {
    // connect to Database
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    // Get collections
    console.log("Fetching Documents");
    const shows = await Show.find();
    const movies = await Movie.find();
    console.log("Fetched Documents");

    return {
      props: {
        shows: JSON.parse(JSON.stringify(shows)),
        movies: JSON.parse(JSON.stringify(movies)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

function Watch(props) {
  let foundMovie = "";
  const movie = useRouter().query;

  // Get movie to display
  if (movie.movieType === "movie") {
    foundMovie = props.movies.find((x) => x.title === movie.movieTitle);
  } else {
    foundMovie = props.shows.find((x) => x.title === movie.movieTitle);
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
