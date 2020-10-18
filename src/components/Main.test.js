import React from "react";
import ReactDOM from "react-dom";
import Main from './Main';
import { render } from "@testing-library/react";

test("<Main /> matches snapshot", () => {
    const fetch = jest.fn(() => Promise.resolve());
    const component = render(
        <Main />
    );
    expect(component.container).toMatchSnapshot();
});