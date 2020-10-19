import React from "react";
import ReactDOM from "react-dom";
import Main from './Main';
import { render } from "@testing-library/react";

test("<Main /> matches snapshot", () => {
    const fetch = jest.fn(() => Promise.resolve());
    const component = render(
        <Main />
    );
    jest.mock(fetch);
    expect(component.container).toMatchSnapshot();
});

test('<Main /> has SpaceX Launch Programs text only once :', () => {
    const fetch = jest.fn(() => Promise.resolve());
    render(
        <Main />
    );
    jest.mock(fetch);

    const items = screen.findAllByText('SpaceX Launch Programs')
    expect(items).toHaveLength(1)
});