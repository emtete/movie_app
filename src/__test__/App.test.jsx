("use strict");
// import sinon from "sinon";
import React, { useState, useEffect } from "react";
import { shallow, mount } from "enzyme";
import App from "../App";

jest.setTimeout(30000);

it("Check state when setTimeout(before, after)", (dummy) => {
  const wrapper = shallow(<App />);

  expect(wrapper.state().isLoading).toEqual(true);
  setTimeout(() => {
    expect(wrapper.state().isLoading).toEqual(false);
    dummy();
  }, 7000);
});

function dummy() {}
