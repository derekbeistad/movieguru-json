import BrowseNav from "./BrowseNav";
import Carousel from "./Carousel";

function Browse(props) {
  // Get arrays from props
  let movies, shows = [];
  movies = props.shows.movies;
  shows = props.shows.shows;

  // Filter arrays by category to create films and series objects
  const films = {
    dramas: movies.filter((x) => x.mainCategory === "drama"),
    documentaries: movies.filter((x) => x.mainCategory === "documentary"),
    comedies: movies.filter((x) => x.mainCategory === "comedy"),
  };
  const series = {
    travels: shows.filter((x) => x.mainCategory === "travel"),
    documentaries: shows.filter((x) => x.mainCategory === "documentary"),
    comedies: shows.filter((x) => x.mainCategory === "comedy"),
  };

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
