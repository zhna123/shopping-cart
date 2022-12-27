import React from "react";
import { render, screen } from '@testing-library/react';
import Footer from "../../components/Footer";
import { MemoryRouter } from "react-router-dom";

describe("Footer component", () => {
    it("render correct footer text", () => {
        render(
            <MemoryRouter>
                <Footer /> 
            </MemoryRouter>
        );
        expect(screen.getByText('IMAGES FROM unsplash.com')).toBeInTheDocument();

    })
})