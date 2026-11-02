import { AiAssistantService } from "@/services/ai-assistant-service";
import { ChatMessage } from "@/types/chat";
import { AiChatTexts } from "@/types/texts";
import { useCallback, useState } from "react";

const SYSTEM_PROMPT = `Você é o Agente Autônomo e Assistente Oficial do portfólio de Anderson Rodrigues, Engenheiro de Software Fullstack e Especialista em IA (MCP, RAG, Agentes Autônomos).
Sua missão é responder a recrutadores, desenvolvedores e clientes sobre as competências, projetos, experiências profissionais e contatos do Anderson.

Diretrizes obrigatórias:
1. Sempre utilize as ferramentas (MCP Tools) disponíveis para consultar os dados reais e precisos do Anderson antes de responder. Nunca invente dados.
2. Seja objetivo, técnico, cortês e profissional. Use markdown elegante (tópicos com marcadores, negrito e links).
3. Adapte seu idioma ao do usuário (se perguntar em português, responda em português; se em inglês, responda em inglês).
4. Destaque os diferenciais do Anderson: domínio em TypeScript, ecossistema Vue 3 (Composition API/Pinia), React/Next.js, APIs de alto desempenho (Express/Hono/Node.js), testes automatizados de alta cobertura (Vitest/Jest) e soluções autorais em IA com Model Context Protocol (MCP).`;

export interface UseAiChatOptions {
  texts: AiChatTexts;
}

export interface UseAiChatReturn {
  messages: ChatMessage[];
  isLoading: boolean;
  sendMessage: (query: string) => Promise<void>;
  clearChat: () => void;
}

export const useAiChat = ({ texts }: UseAiChatOptions): UseAiChatReturn => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: "initial-welcome",
      role: "assistant",
      content: texts.welcomeMessage,
      timestamp: Date.now(),
      toolsUsed: ["get_profile_and_contact"],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(
    async (query: string) => {
      const trimmed = query.trim();
      if (!trimmed || isLoading) return;

      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: trimmed,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      try {
        const response = await AiAssistantService.processMessage({
          query: trimmed,
          history: messages,
          systemPrompt: SYSTEM_PROMPT,
        });

        const assistantMessage: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: response.content || texts.errorGeneric,
          timestamp: Date.now(),
          toolsUsed: response.toolsUsed,
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch {
        const errorMessage: ChatMessage = {
          id: `err-${Date.now()}`,
          role: "assistant",
          content: texts.errorGeneric,
          timestamp: Date.now(),
          isError: true,
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages, texts.errorGeneric]
  );

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content: texts.welcomeMessage,
        timestamp: Date.now(),
        toolsUsed: ["get_profile_and_contact"],
      },
    ]);
  }, [texts.welcomeMessage]);

  return {
    messages,
    isLoading,
    sendMessage,
    clearChat,
  };
};

