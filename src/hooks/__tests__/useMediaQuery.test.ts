import { useMediaQuery } from "@/hooks/useMediaQuery";
import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("useMediaQuery", () => {
  it("should return false when matchMedia does not match", () => {
    vi.spyOn(window, "matchMedia").mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(false);
  });

  it("should return true when matchMedia matches", () => {
    vi.spyOn(window, "matchMedia").mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(true);
  });
});

