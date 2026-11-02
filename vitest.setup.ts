import "@testing-library/jest-dom/vitest";
import React from "react";

(globalThis as unknown as { React: typeof React }).React = React;

if (typeof window !== "undefined") {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });

  class MockResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  window.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver;

  class MockIntersectionObserver {
    root = null;
    rootMargin = "";
    thresholds = [];
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }

  window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
}
