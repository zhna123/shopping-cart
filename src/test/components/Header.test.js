import React from "react";
import { render, screen } from '@testing-library/react';
import Header from "../../components/Header";
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
    it("renders correct heading links", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        expect(screen.getAllByRole('listitem').find(listitem => listitem.textContent === 'HOME')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem').find(listitem => listitem.textContent === 'ABOUT')).toBeInTheDocument();  
        expect(screen.getAllByRole('listitem').find(listitem => listitem.textContent === 'SHOP')).toBeInTheDocument();  
    })
})