import React from "react";
import { render, screen } from "@testing-library/react";
import ItemList from "./index";
import data from "../../../../test/mock-data.json";

describe("Item List Component", () => {
  let component;
  beforeEach(() => {
    component = render(<ItemList items={data.items} />);
  });

  it("should display 3 items", () => {
    const LisItems = screen.getAllByRole("listitem");

    expect(LisItems).toHaveLength(4);
  });
});
