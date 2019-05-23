import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from "./movie-list";

it(`render movie list`, () => {
  const tree = renderer.create(<MovieList movies={[`firs`, `second`] } goToMovie={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
