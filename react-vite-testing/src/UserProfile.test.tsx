import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import UserProfile from "./UserProfile";

describe("UserProfile Component", () => {
  beforeEach(() => {
    window.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("fetch users Data", async () => {
    window.fetch.mockResolvedValueOnce({
      json: async () => ({
        id: 1,
        name: "adam",
        email: "adam@gamil.com",
      }),
    });

    render(<UserProfile userId="1" />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      const contentBlock = screen.getByTestId("user-element");
      expect(contentBlock).toHaveTextContent(/adam/i);
      expect(contentBlock).toHaveTextContent(/adam@gamil.com/i);
    });
  });
});
