("use strict");
// import sinon from "sinon";
import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import axios from "axios";

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

describe("Check ComponentDidMount", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("componentDidMount", async () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "getMovies");
    instance.componentDidMount();
    await instance.getMovies();
    expect(instance.getMovies).toHaveBeenCalledTimes(2);
    expect(instance.state.isLoading).toEqual(false);
  });
});
