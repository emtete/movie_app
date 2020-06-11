("use strict");
// import sinon from "sinon";
import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import sinon from "sinon";
import axios from "axios";

jest.setTimeout(30000);

// it("Check state when setTimeout(before, after)", (dummy) => {
//   const wrapper = shallow(<App />);

//   expect(wrapper.state().isLoading).toEqual(true);
//   setTimeout(() => {
//     expect(wrapper.state().isLoading).toEqual(false);
//     dummy();
//   }, 7000);
// });

// function dummy() {}

describe("Check getMovie", () => {
  let movies = [];

  beforeEach(async () => {
    const result = await axios.get("https://yts.mx/api/v2/list_movies.json");
    movies = result.data.data.movies;
  });

  it("ComponentDidMount", () => {
    expect(movies).not.toBeUndefined();
  });
});
