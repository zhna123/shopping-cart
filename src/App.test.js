import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import App from './App';

describe("App component", () => {
  it("render correct page after navigating", async () => {
    render(<App />);
    // verify page content for default route
    expect(screen.getByTestId('home')).toBeInTheDocument()

    // verify page content for expected route after navigating
    const user = userEvent.setup();
    await user.click(screen.getByText(/shop/i))
    expect(screen.getByTestId('shop')).toBeInTheDocument()
  });
});
