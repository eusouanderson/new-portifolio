import { cn, publicAssetPath } from "@/lib/utils";
import { describe, expect, it } from "vitest";

describe("Utils Library", () => {
  describe("cn", () => {
    it("should merge class names correctly", () => {
      const result = cn("p-4", "text-white", { "bg-black": true, "bg-red": false });
      expect(result).toBe("p-4 text-white bg-black");
    });

    it("should handle conflicting tailwind classes with precedence", () => {
      const result = cn("p-4", "p-8");
      expect(result).toBe("p-8");
    });
  });

  describe("publicAssetPath", () => {
    it("should return the path unchanged when no NEXT_PUBLIC_BASE_PATH is set", () => {
      delete process.env.NEXT_PUBLIC_BASE_PATH;
      expect(publicAssetPath("/test.png")).toBe("/test.png");
      expect(publicAssetPath("test.png")).toBe("/test.png");
    });

    it("should prepend NEXT_PUBLIC_BASE_PATH correctly", () => {
      process.env.NEXT_PUBLIC_BASE_PATH = "/new-portifolio";
      expect(publicAssetPath("/test.png")).toBe("/new-portifolio/test.png");
      expect(publicAssetPath("test.png")).toBe("/new-portifolio/test.png");
      delete process.env.NEXT_PUBLIC_BASE_PATH;
    });
  });
});

