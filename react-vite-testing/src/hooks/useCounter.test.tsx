import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useCounter from "./useCounter";
import { act } from "react";

describe("useCounter hook", () => {
  it("intial value is 1", () => {
    const { result } = renderHook(() => useCounter(1));
    expect(result.current.count).toBe(1);
  });
  it("increment counter value", () => {
    const { result } = renderHook(() => useCounter(1));
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(2);
  });

  it("decrrement counter value", () => {
    const { result } = renderHook(() => useCounter(1));
    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(0);
  });
});
