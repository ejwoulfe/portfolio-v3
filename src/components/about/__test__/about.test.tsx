import About from "../about";
import selfHiking from "../../../assets/about/compressed-hiking.jpg";

import { render, screen } from "@testing-library/react";

describe("The about component", () => {
  it("should have a title with the name About, an image, and a description container", () => {
    render(<About />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", selfHiking);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "self portrait");
    expect(screen.getByTestId("test-about-description")).toBeInTheDocument();
  });
});
