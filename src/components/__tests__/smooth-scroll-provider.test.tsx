import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SmoothScrollProvider } from "../smooth-scroll-provider";

describe("SmoothScrollProvider", () => {
  it("should render children without crashing", () => {
    render(
      <SmoothScrollProvider>
        <div data-testid="content">Test Content</div>
      </SmoothScrollProvider>
    );

    expect(screen.getByTestId("content")).toBeInTheDocument();
  });
});
