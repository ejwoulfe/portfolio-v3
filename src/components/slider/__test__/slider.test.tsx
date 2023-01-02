import SimpleSlider from "../simple-slider";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { ffxivccProject } from "../../projects/project-objects/ffxivcc";
import ffxivccImage from "../../../assets/projects/ffxivcc.png";

describe("The Simple Slider component", () => {
  it("should initial load with the FFXIV Crafting Calculator as the title, an image of the project, and a description", () => {
    render(<SimpleSlider />);
    expect(screen.getByText("FFXIV Crafting Calculator")).toBeInTheDocument();
    expect(screen.getByText(ffxivccProject.description[0])).toBeInTheDocument();
    const image = screen.getAllByAltText(ffxivccProject.name + " project")[0];
    expect(image).toHaveAttribute("src", ffxivccImage);
  });

  it("should have the correct number of technologies and that their names being displayed on the screen match the array", () => {
    render(<SimpleSlider />);
    const numOfTechIcons = ffxivccProject.techStack.length;
    const techStackIconsContainer = screen.getByTestId("test-tech-stack-list");
    expect(within(techStackIconsContainer).getAllByRole("listitem")).toHaveLength(numOfTechIcons);
    for (let i = 0; i < numOfTechIcons; i++) {
      expect(within(techStackIconsContainer).getAllByRole("listitem")[i]).toHaveTextContent(
        ffxivccProject.techStack[i]
      );
    }
  });
  it("should load the next project when the next button is clicked", () => {
    render(<SimpleSlider />);
    const nextButton = screen.getAllByRole("button")[1];
    expect(nextButton).toHaveTextContent("Next");
    fireEvent.click(nextButton);
    expect(screen.getByText("LoL Champions")).toBeInTheDocument();
  });
});
