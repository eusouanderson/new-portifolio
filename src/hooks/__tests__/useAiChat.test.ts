import { useAiChat } from "@/hooks/useAiChat";
import { AiChatTexts } from "@/types/texts";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const mockTexts: AiChatTexts = {
  title: "Chat com IA",
  subtitle: "Pergunte ao Agente",
  description: "Assistente oficial",
  badge: "MCP Agent",
  statusOnline: "Online",
  welcomeMessage: "Bem-vindo!",
  clearButton: "Limpar",
  thinkingText: "Pensando...",
  suggestedQuestionsTitle: "Sugestões",
  suggestedQuestions: ["Quais suas skills?"],
  inputPlaceholder: "Digite sua dúvida...",
  sendButton: "Enviar",
  errorGeneric: "Erro ao processar",
  mcpToolBadgePrefix: "Tool",
  groqMissingNotice: "Groq key missing",
};

describe("useAiChat", () => {
  it("should initialize with welcome message", () => {
    const { result } = renderHook(() => useAiChat({ texts: mockTexts }));
    expect(result.current.messages).toHaveLength(1);
    expect(result.current.messages[0].content).toBe("Bem-vindo!");
    expect(result.current.isLoading).toBe(false);
  });

  it("should send message and receive assistant response", async () => {
    delete process.env.NEXT_PUBLIC_GROQ_API_KEY;

    const { result } = renderHook(() => useAiChat({ texts: mockTexts }));

    await act(async () => {
      await result.current.sendMessage("Quais são suas tecnologias?");
    });

    expect(result.current.messages.length).toBeGreaterThanOrEqual(3);
    const lastMessage = result.current.messages[result.current.messages.length - 1];
    expect(lastMessage.role).toBe("assistant");
    expect(lastMessage.content).toContain("Competências e Tecnologias Principais");
  });

  it("should clear chat back to welcome message", async () => {
    const { result } = renderHook(() => useAiChat({ texts: mockTexts }));

    await act(async () => {
      await result.current.sendMessage("Olá");
    });

    expect(result.current.messages.length).toBeGreaterThan(1);

    act(() => {
      result.current.clearChat();
    });

    expect(result.current.messages).toHaveLength(1);
    expect(result.current.messages[0].content).toBe("Bem-vindo!");
  });
});
