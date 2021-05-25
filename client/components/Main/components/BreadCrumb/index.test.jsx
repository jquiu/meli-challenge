import React from "react";
import { render, screen } from "@testing-library/react";
import Breadcrumbs from "./index";
import data from "../../../../test/mock-data-detail.json";

describe("Breadcrumbs", () => {
  let component;
  beforeEach(() => {
    component = render(<Breadcrumbs categories={data.categories} />);
  });

  it("should exist on document", () => {
    const Nav = screen.getByRole("navigation");

    expect(Nav).toBeInTheDocument();
  });

  it("should display 2 items", () => {
    const LisItems = screen.getAllByRole("listitem");

    expect(LisItems).toHaveLength(2);
  });

  it("should find href", () => {
    expect(
      screen.getByText("Celulares y Teléfonos").closest("a")
    ).toHaveAttribute("href", "/MLA1051");
    expect(
      screen.getByText("Celulares y Smartphones").closest("a")
    ).toHaveAttribute("href", "/MLA1055");
  });
});
