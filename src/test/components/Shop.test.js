import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { products } from "../../products";

import Shop from "../../components/Shop";
import { MemoryRouter } from "react-router-dom";

describe("shop component", () => {
    it("shows correct number of products", () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        )
        const productsOnPage = screen.getAllByTestId("product");
        expect(productsOnPage.length).toEqual(products.length)

    })

    it("increase amount after user clicks add icon", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        )
        const user = userEvent.setup();
        const addIcons = screen.getAllByTestId("add-icon");
        await user.click(addIcons[0]);

        const inputFields = screen.getAllByRole("textbox");
        expect(inputFields[0].value).toBe("1");

    })

    it("decrease amount after user clicks remove icon", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        )
        const user = userEvent.setup();
        const removeIcons = screen.getAllByTestId("remove-icon");
        const addIcons = screen.getAllByTestId("add-icon");

        await user.click(addIcons[0]);
        await user.click(addIcons[0]);

        await user.click(removeIcons[0]);

        const inputFields = screen.getAllByRole("textbox");
        expect(inputFields[0].value).toBe("1");
    })

    it.skip("remains 0 if user clicks remove icon when input field is 0", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        )
        const user = userEvent.setup();
        const removeIcons = screen.getAllByTestId("remove-icon");

        await user.click(removeIcons[0]);

        const inputFields = screen.getAllByRole("textbox");
        expect(inputFields[0].value).toBe("0");
    })

    it("input value is updated correctly", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        )
        const inputFields = screen.getAllByRole('textbox');
        const user = userEvent.setup();
        await user.type(inputFields[0], '2');
        expect(inputFields[0].value).toBe("2");
    })

    it("reset input to 0 after clicks add to cart", async () => {
        const setCart = jest.fn();
        const setCartTotal = jest.fn();
        render(
            <MemoryRouter>
                <Shop cart={{}} setCart={setCart} cartTotal={0} setCartTotal={setCartTotal}/>
            </MemoryRouter>
        )
        const inputFields = screen.getAllByRole('textbox');
        const submitIcons = screen.getAllByTestId('add-to-cart');
        const user = userEvent.setup();
        await user.type(inputFields[0], '2');
        await user.click(submitIcons[0]);
        expect(inputFields[0].value).toBe("0");
    })
})