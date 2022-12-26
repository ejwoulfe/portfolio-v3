import Banner from "../banner";
import { render, screen } from "@testing-library/react";

describe("The banner component", () => {
  it("should have a banner container with name and role text", () => {
    render(<Banner />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText("Ed Woulfe")).toBeInTheDocument();
    expect(screen.getByText("Web Developer")).toBeInTheDocument();
  });
});
