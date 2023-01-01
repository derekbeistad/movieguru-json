import BrowseNav from "./pages/components/BrowseNav";
import Carousel from "./pages/components/Carousel";

function Browse(props) {
  // Get arrays from props
  let movies = [];
  let shows = [];

  let films = {
    dramas: [],
    documentaries: [],
    comedies: []
  }
  let series = {
    travels: [],
    documentaries: [],
    comedies: []
  }

  if (props.shows !== null) {
    movies = props.shows.movies;
    shows = props.shows.shows;

    // Filter arrays by category to create films and series objects
    films = {
      dramas: movies.filter((x) => x.mainCategory === "drama"),
      documentaries: movies.filter((x) => x.mainCategory === "documentary"),
      comedies: movies.filter((x) => x.mainCategory === "comedy"),
    };
    series = {
      travels: shows.filter((x) => x.mainCategory === "travel"),
      documentaries: shows.filter((x) => x.mainCategory === "documentary"),
      comedies: shows.filter((x) => x.mainCategory === "comedy"),
    };
  }

  return (
    <div id="browse-section">
      <BrowseNav />
      <div className="browse-section">
        <div id="movies">
          <h2>Movies</h2>
          <Carousel items={films.dramas} category="Dramas" />
          <Carousel items={films.documentaries} category="Documentaries" />
          <Carousel items={films.comedies} category="Comedies" />
        </div>
        <div id="shows">
          <h2 className="">Shows</h2>
          <Carousel items={series.travels} category="Travel" />
          <Carousel items={series.documentaries} category="Documentaries" />
          <Carousel items={series.comedies} category="Comedies" />
        </div>
      </div>
    </div>
  );
}

export default Browse;
