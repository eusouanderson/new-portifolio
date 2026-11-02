import { executeMcpTool } from "@/lib/mcp/executor";
import { describe, expect, it } from "vitest";

describe("MCP Tool Executor", () => {
  it("should execute get_profile_and_contact", async () => {
    const result = await executeMcpTool("get_profile_and_contact");
    expect(result.toolName).toBe("get_profile_and_contact");
    expect(result.result).toHaveProperty("name", "Anderson Rodrigues");
  });

  it("should execute get_skills_and_technologies", async () => {
    const result = await executeMcpTool("get_skills_and_technologies");
    expect(result.toolName).toBe("get_skills_and_technologies");
    expect(Array.isArray(result.result)).toBe(true);
  });

  it("should execute get_work_experience", async () => {
    const result = await executeMcpTool("get_work_experience");
    expect(result.toolName).toBe("get_work_experience");
    expect(Array.isArray(result.result)).toBe(true);
  });

  it("should execute get_projects", async () => {
    const result = await executeMcpTool("get_projects");
    expect(result.toolName).toBe("get_projects");
    expect(Array.isArray(result.result)).toBe(true);
  });

  it("should execute get_ai_ecosystem", async () => {
    const result = await executeMcpTool("get_ai_ecosystem");
    expect(result.toolName).toBe("get_ai_ecosystem");
    expect(result.result).toHaveProperty("solutions");
  });

  it("should handle unknown tools gracefully", async () => {
    const result = await executeMcpTool("unknown_tool");
    expect(result.result).toHaveProperty("error");
  });
});
