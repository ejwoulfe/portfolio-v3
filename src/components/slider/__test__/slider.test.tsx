import SimpleSlider from "../simple-slider";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { ffxivccProject } from "../../projects/project-objects/ffxivcc";
import projectsArr from "../../projects/project-objects/projects-array";

describe("The Simple Slider component", () => {
  it("should initial load with the first project in the projects array as the title, an image of the project, and a description", () => {
    render(<SimpleSlider />);
    const initialProject = projectsArr[0];
    expect(screen.getByText(initialProject.name)).toBeInTheDocument();
    expect(screen.getByText(initialProject.description[0])).toBeInTheDocument();
    const image = screen.getAllByAltText(initialProject.name + " project")[0];
    expect(image).toHaveAttribute("src", initialProject.image);
  });

  it("should have 3 links for each project, one for a demo, one for the live website, and one for github", () => {
    render(<SimpleSlider />);
    const numOfLinks = 3;
    const linksContainer = screen.getByTestId("test-project-links");
    expect(within(linksContainer).getAllByRole("listitem")).toHaveLength(numOfLinks);
  });

  it("should have the correct number of technologies and that their names being displayed on the screen match the array", () => {
    render(<SimpleSlider />);
    const initialProject = projectsArr[0];
    const numOfTechIcons = initialProject.techStack.length;
    const techStackIconsContainer = screen.getByTestId("test-tech-stack-list");
    expect(within(techStackIconsContainer).getAllByRole("listitem")).toHaveLength(numOfTechIcons);
    for (let i = 0; i < numOfTechIcons; i++) {
      expect(within(techStackIconsContainer).getAllByRole("listitem")[i]).toHaveTextContent(
        initialProject.techStack[i]
      );
    }
  });
  it("should load the next project when the next button is clicked", () => {
    render(<SimpleSlider />);
    const secondProject = projectsArr[1];
    const nextButton = screen.getAllByRole("button")[4];
    expect(nextButton).toHaveTextContent("Next");
    fireEvent.click(nextButton);
    expect(screen.getByText(secondProject.name)).toBeInTheDocument();
  });
  it("should load the last project in the array after the previous button is pressed when at the 0th index or initial project", () => {
    render(<SimpleSlider />);
    const lastProject = projectsArr[projectsArr.length - 1];
    const prevButton = screen.getAllByRole("button")[3];
    expect(prevButton).toHaveTextContent("Prev");
    fireEvent.click(prevButton);
    expect(screen.getByText(lastProject.name)).toBeInTheDocument();
  });
});
