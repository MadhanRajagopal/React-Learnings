import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, expect, it } from "vitest";

describe("App Component", () => {
  it("renders welcome message", () => {
    render(<App />);
    expect(screen.getByText(/welcome to vite/i)).toBeInTheDocument();
  });
});
