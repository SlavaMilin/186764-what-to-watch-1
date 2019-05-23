import React from 'react';
import renderer from 'react-test-renderer';
import MovieItem from "./movie-item";

it(`render movie item`, () => {
  const tree = renderer.create(<MovieItem movie={`first`} goToMovie={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
