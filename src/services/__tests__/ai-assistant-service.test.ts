import { AiAssistantService } from "@/services/ai-assistant-service";
import { describe, expect, it } from "vitest";

describe("AiAssistantService", () => {
  it("should process skills inquiry using local engine when no API key is present", async () => {
    delete process.env.NEXT_PUBLIC_GROQ_API_KEY;

    const response = await AiAssistantService.processMessage({
      query: "Quais são suas principais tecnologias e skills?",
      history: [],
      systemPrompt: "Test Prompt",
    });

    expect(response.toolsUsed).toContain("get_skills_and_technologies");
    expect(response.content).toContain("Competências e Tecnologias Principais");
  });

  it("should process projects inquiry using local engine", async () => {
    delete process.env.NEXT_PUBLIC_GROQ_API_KEY;

    const response = await AiAssistantService.processMessage({
      query: "Me mostre seus projetos",
      history: [],
      systemPrompt: "Test Prompt",
    });

    expect(response.toolsUsed).toContain("get_projects");
    expect(response.content).toContain("Principais Projetos");
  });

  it("should process AI ecosystem inquiry using local engine", async () => {
    delete process.env.NEXT_PUBLIC_GROQ_API_KEY;

    const response = await AiAssistantService.processMessage({
      query: "Quais ferramentas de MCP você desenvolveu?",
      history: [],
      systemPrompt: "Test Prompt",
    });

    expect(response.toolsUsed).toContain("get_ai_ecosystem");
    expect(response.content).toContain("Engenharia de IA & MCP");
  });

  it("should fallback to profile and contact for general greetings", async () => {
    delete process.env.NEXT_PUBLIC_GROQ_API_KEY;

    const response = await AiAssistantService.processMessage({
      query: "Olá, tudo bem?",
      history: [],
      systemPrompt: "Test Prompt",
    });

    expect(response.toolsUsed).toContain("get_profile_and_contact");
    expect(response.content).toContain("Anderson Rodrigues");
  });
});

