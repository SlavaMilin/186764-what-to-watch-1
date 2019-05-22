import React from 'react';
import Catalog from "../catalog/catalog.jsx";
import PromoCard from "../promo-card/promo-card.jsx";
import Footer from "../footer/footer.jsx";

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const genres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`];

const App = () => {
  return (
    <React.Fragment>
      <PromoCard />
      <div className="page-content">
        <Catalog movies={movies} genres={genres}/>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
