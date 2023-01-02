import Header from "../components/Header";
import CoverPage from "../components/CoverPage";
import Footer from "../components/Footer";
import Browse from "../components/Browse";
import connectMongo from "../utils/connectMongo";
import Show from "../models/showModel";
import Movie from "../models/movieModel";
import { useSession } from "next-auth/react";
import Head from "next/head";

export const getServerSideProps = async () => {
  try {
    // Conntect to database
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
  return {
    props: {
      shows: [],
      movies: []
    }
  }
};

function Home(shows, movies) {
  const { data: session, status } = useSession();

  return (
    <div>
      <Head>
        <title>MovieGuru</title>
      </Head>
      <Header />
      <CoverPage />
      <Browse shows={shows} movies={movies} />
      <Footer />
    </div>
  );
}

export default Home;
