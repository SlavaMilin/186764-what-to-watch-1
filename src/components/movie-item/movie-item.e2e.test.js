import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieItem from "./movie-item";

Enzyme.configure({adapter: new Adapter()});

it(`test click on title function`, () => {
  const goToMovie = jest.fn();

  const movieItem = shallow(<MovieItem movie={`first`} goToMovie={goToMovie}/>);

  const title = movieItem.find(`.small-movie-card__title`);
  title.simulate(`click`);

  expect(goToMovie).toHaveBeenCalledTimes(1);
});
