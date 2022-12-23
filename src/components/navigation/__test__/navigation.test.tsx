import Navigation from "../navigation";
import { render, screen } from "@testing-library/react";

describe("The navigation component", () => {
  it("should render github and resume links", () => {
    // jest.spyOn(window.screen, "width", "get").mockReturnValue(700);
    render(<Navigation />);
    expect(screen.getByText("Resume")).toHaveAttribute("href", "Edmond_Woulfe_Resume.pdf");
    expect(screen.getByText("GitHub")).toHaveAttribute("href", "https://github.com/ejwoulfe");
  });

  it("should render all page navigation links", () => {
    // jest.spyOn(window.screen, "width", "get").mockReturnValue(700);
    render(<Navigation />);
    const navSkills = screen.getByText("skills");
    const navProjects = screen.getByText("projects");
    const navAbout = screen.getByText("about");

    expect(navSkills).toBeInTheDocument();
    expect(navProjects).toBeInTheDocument();
    expect(navAbout).toBeInTheDocument();
  });
});
