import React from "react";
import { render, screen } from '@testing-library/react';
import Home from "../../components/Home";
import { MemoryRouter } from "react-router-dom";

describe("home component", () => {
    it("shows shop page after button clicked", () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Home cartTotal=""/>
            </MemoryRouter>
            );
        expect(screen.getByTestId('home')).toBeInTheDocument()
        expect(screen.getByText("UPDATE YOUR HOME WITH TEXTILE")).toBeInTheDocument();


    })
})