import React from 'react';
import Catalog from "../catalog/catalog.jsx";
import PromoCard from "../promo-card/promo-card.jsx";
import Footer from "../footer/footer.jsx";
import movies from "../../mocks/movies";
import genres from "../../mocks/genres";

const goToMovie = () => {
  return true;
};

const App = () => {
  return (
    <React.Fragment>
      <PromoCard />
      <div className="page-content">
        <Catalog movies={movies} genres={genres} goToMovie={goToMovie} />

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
