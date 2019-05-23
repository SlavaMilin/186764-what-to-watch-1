import React from 'react';
import renderer from 'react-test-renderer';
import GenreItem from "./genre-item";

it(`render genre item`, () => {
  const tree = renderer.create(<GenreItem genre={`drama`}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
