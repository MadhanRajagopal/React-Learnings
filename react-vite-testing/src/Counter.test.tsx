import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { userEvent } from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component", () => {
  it("renders default Counter value ", () => {
    render(<Counter />);
    expect(screen.getByText("Counter : 0")).toBeInTheDocument();
  });

  it("increments  Counter  using button click ", async () => {
    render(<Counter />);
    const button = screen.getByRole("button", { name: "Increment" });
    const textField = screen.getByRole("textbox", {
      name: "inputField",
    }) as HTMLInputElement;
    const counterVal = screen.getByTestId("counter-id");

    await userEvent.click(button);
    expect(counterVal.textContent).toEqual("Counter : 1");

    await userEvent.type(textField, "Madhan");
    expect(textField.value).toEqual("Madhan");
  });
});
