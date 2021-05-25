import React from "react";
import { render, screen } from "@testing-library/react";
import ItemDetail from "./index";
import data from "../../../../test/mock-data-detail.json";

describe("Item Detail Page", () => {
  let component;
  beforeEach(() => {
    component = render(<ItemDetail data={data} />);
  });

  it("should exist a nav document", () => {
    const Nav = screen.getByRole("navigation");

    expect(Nav).toBeInTheDocument();
  });

  it("should render product name", () => {
    expect(screen.getByText("iPhone 11 64 Gb Verde")).toBeInTheDocument();
  });

  it("should render product description", () => {
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  it("should render the product price", () => {
    expect(screen.getByText("149.000")).toBeInTheDocument();
  });

  it("should render the product image", () => {
    const img = screen.getAllByTestId("item-image");
    expect(img).toBeDefined();
  });

});
