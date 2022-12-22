import CollapsedList from "../collapsed-list/collapsed-list";
import { render, screen, fireEvent } from "@testing-library/react";

describe("The collapsed list component", () => {
  it("should render at a screen width less than 750 pixels", () => {
    jest.spyOn(window.screen, "width", "get").mockReturnValue(700);
    render(<CollapsedList />);
    const expandButton = screen.getByAltText("open menu icon");
    expect(expandButton).toBeInTheDocument();
  });
});

describe("the menu button", () => {
  it("should render the list of page navigation links when pressed", () => {
    render(<CollapsedList />);
    const expandButton = screen.getByAltText("open menu icon");
    fireEvent.click(expandButton);
    const navList = screen.getByTestId("page-nav-list");
    expect(navList).toBeInTheDocument();
    const navSkills = screen.getByText("skills");
    const navProjects = screen.getByText("projects");
    const navAbout = screen.getByText("about");

    expect(navSkills).toBeInTheDocument();
    expect(navProjects).toBeInTheDocument();
    expect(navAbout).toBeInTheDocument();
  });
});

describe("the close menu button", () => {
  it("should unmount the nav list when pressed", () => {
    render(<CollapsedList />);
    const expandButton = screen.getByAltText("open menu icon");
    fireEvent.click(expandButton);
    const navList = screen.getByTestId("page-nav-list");
    expect(navList).toBeInTheDocument();
    const closeButton = screen.getByAltText("close menu icon");
    fireEvent.click(closeButton);
    expect(navList).not.toBeInTheDocument();
  });
});
