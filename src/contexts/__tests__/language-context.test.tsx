import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import { act, renderHook } from "@testing-library/react";
import React, { ReactNode } from "react";
import { beforeEach, describe, expect, it } from "vitest";

describe("LanguageContext", () => {
  beforeEach(() => {
    localStorage.clear();
    window.history.pushState(null, "", "/");
  });

  const wrapper = ({ children }: { children: ReactNode }) => (
    <LanguageProvider initialLanguage="pt-br">{children}</LanguageProvider>
  );

  it("should initialize with default language pt-br", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe("pt-br");
    expect(result.current.texts).toBeDefined();
  });

  it("should toggle language to en and update localStorage", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });

    act(() => {
      result.current.setLanguage("en");
    });

    expect(result.current.language).toBe("en");
    expect(localStorage.getItem("portfolio_lang")).toBe("en");
  });

  it("should throw error if useLanguage is used outside LanguageProvider", () => {
    expect(() => renderHook(() => useLanguage())).toThrowError(
      "useLanguage must be used within a LanguageProvider"
    );
  });
});

