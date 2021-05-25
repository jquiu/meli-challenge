import React from "react";
import { render, screen } from "@testing-library/react";
import Item from "./index";
import data from "../../../../test/mock-data.json";

describe("Item", () => {
  let component;
  beforeEach(() => {
    const { items } = data;
    component = render(<Item item={items[0]} />);
  });

  it("should render product name", () => {
    expect(screen.getByText("iPhone 11 64 Gb Verde")).toBeInTheDocument();
  });

  it("should render the product price", () => {
    expect(screen.getByText("149.000")).toBeInTheDocument();
  });

  it("should render the product image", () => {
    const img = screen.getAllByTestId("item-image");
    expect(img).toBeDefined();
  });

  it("should render product city", () => {
    expect(screen.getByText("Balvanera")).toBeInTheDocument();
  });
});
