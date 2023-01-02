import Projects from "../projects";
import { render, screen } from "@testing-library/react";

describe("The skills component", () => {
  it("should have a title with the name Projects", () => {
    render(<Projects />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
});
