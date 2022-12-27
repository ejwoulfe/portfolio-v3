import Skills from "../skills";
import { render, screen, within } from "@testing-library/react";
import { frontEndIcons, backEndIcons, toolIcons } from "../modules/skills";

describe("The skills component", () => {
  it("should have a title with 3 containers for each category of skills", () => {
    render(<Skills />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByTestId("front-end-test")).toBeInTheDocument();
    expect(screen.getByTestId("back-end-test")).toBeInTheDocument();
    expect(screen.getByTestId("tools-test")).toBeInTheDocument();
  });
});

describe("The front end skills container", () => {
  it("should have a title with 7 icons for each technology", () => {
    render(<Skills />);
    const numOfFrontEndSkills = frontEndIcons.length;
    const frontEndContainer = screen.getByTestId("front-end-test");
    expect(screen.getByText("Front End")).toBeInTheDocument();
    expect(within(frontEndContainer).getAllByRole("listitem")).toHaveLength(numOfFrontEndSkills);
  });
});
describe("The back end skills container", () => {
  it("should have a title with 5 icons for each technology", () => {
    render(<Skills />);
    const numOfBackEndSkills = backEndIcons.length;
    const backEndContainer = screen.getByTestId("back-end-test");
    expect(screen.getByText("Back End")).toBeInTheDocument();
    expect(within(backEndContainer).getAllByRole("listitem")).toHaveLength(numOfBackEndSkills);
  });
});
describe("The tools skills container", () => {
  it("should have a title with icons for each technology", () => {
    render(<Skills />);
    const numOfToolSkills = toolIcons.length;
    const toolsContainer = screen.getByTestId("tools-test");
    expect(screen.getByText("Tools")).toBeInTheDocument();
    expect(within(toolsContainer).getAllByRole("listitem")).toHaveLength(numOfToolSkills);
  });
});
