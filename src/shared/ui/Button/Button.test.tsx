import {Button, ThemeButton} from "shared/ui/Button/Button";
import {render, screen} from "@testing-library/react";


describe("Button test", () => {
  test("button test", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument()
  });

  test("button have class theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear")
    screen.debug();

  });
})