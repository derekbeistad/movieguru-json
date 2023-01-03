import Header from "../components/Header";
import CoverPage from "../components/CoverPage";
import Footer from "../components/Footer";
import Browse from "../components/Browse";
import { useSession } from "next-auth/react";
import Head from "next/head";
import movies from "../data/movies";
import shows from "../data/shows";

function Home() {
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
