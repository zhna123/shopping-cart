import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import App from './App';

describe("App component", () => {
  it("render correct page after navigating", async () => {
    render(<App />);
    const user = userEvent.setup();
    // verify page content for default route
    expect(screen.getByTestId('home')).toBeInTheDocument()
    await user.click(screen.getByTestId("see_products"));
    expect(screen.getByTestId('shop')).toBeInTheDocument()

    // verify page content for expected route after navigating
    await user.click(screen.getByText(/shop/i))
    expect(screen.getByTestId('shop')).toBeInTheDocument()

    await user.click(screen.getByTestId('cart_icon'));
    expect(screen.getByTestId('cart')).toBeInTheDocument();
  });
});
