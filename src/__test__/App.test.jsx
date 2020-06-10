// import sinon from "sinon";
import React, { useState, useEffect } from "react";
import { shallow, mount } from "enzyme";
import App from "../App";

it("Check state when setTimeout(before, after)", () => {
  const wrapper = shallow(<App />);
  // const wrapper = shallow.find("App");
  // expect(wrapper.state().isLoading).toEqual(true);
  // setTimeout(() => {
  //   expect(wrapper.state().isLoading).toEqual(false);
  // }, 6000);
  // expect(wrapper.state().name).toEqual("");
});
