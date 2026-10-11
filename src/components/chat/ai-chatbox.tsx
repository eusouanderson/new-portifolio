"use client";

import { executeMcpTool } from "@/lib/mcp/executor";
import { mcpTools } from "@/lib/mcp/tools-definitions";
import { cn } from "@/lib/utils";
import { ChatMessage } from "@/types/chat";
import { AiChatTexts } from "@/types/texts";
import { AnimatePresence, motion } from "framer-motion";
import OpenAI from "openai";
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { TbCpu, TbRefresh, TbRobot, TbSend, TbSparkles } from "react-icons/tb";

interface Props {
  texts: AiChatTexts;
  className?: string;
}

const SYSTEM_PROMPT = `Você é o Agente Autônomo e Assistente Oficial do portfólio de Anderson Rodrigues, Engenheiro de Software Fullstack e Especialista em IA (MCP, RAG, Agentes Autônomos).
Sua missão é responder a recrutadores, desenvolvedores e clientes sobre as competências, projetos, experiências profissionais e contatos do Anderson.

Diretrizes obrigatórias:
1. Sempre utilize as ferramentas (MCP Tools) disponíveis para consultar os dados reais e precisos do Anderson antes de responder. Nunca invente dados.
2. Seja objetivo, técnico, cortês e profissional. Use markdown elegante (tópicos com marcadores, negrito e links).
3. Adapte seu idioma ao do usuário (se perguntar em português, responda em português; se em inglês, responda em inglês).
4. Destaque os diferenciais do Anderson: domínio em TypeScript, ecossistema Vue 3 (Composition API/Pinia), React/Next.js, APIs de alto desempenho (Express/Hono/Node.js), testes automatizados de alta cobertura (Vitest/Jest) e soluções autorais em IA com Model Context Protocol (MCP).`;

export const AiChatbox = ({ texts, className }: Props) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: "initial-welcome",
      role: "assistant",
      content: texts.welcomeMessage,
      timestamp: Date.now(),
      toolsUsed: ["get_profile_and_contact"],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;
      if (!apiKey) {
        throw new Error("NEXT_PUBLIC_GROQ_API_KEY não configurada.");
      }

      const groq = new OpenAI({
        apiKey,
        baseURL: "https://api.groq.com/openai/v1",
        dangerouslyAllowBrowser: true,
      });
      const apiMessages = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));
      const formattedMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
        { role: "system", content: SYSTEM_PROMPT },
        ...apiMessages.map((message) => ({
          role: message.role as "user" | "assistant" | "system",
          content: message.content,
        })),
      ];
      const initialResponse = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: formattedMessages,
        tools: mcpTools as unknown as OpenAI.Chat.ChatCompletionTool[],
        tool_choice: "auto",
        temperature: 0.3,
        max_tokens: 1024,
      });

      const responseMessage = initialResponse.choices[0]?.message;
      const toolsUsed: string[] = [];

      if (responseMessage?.tool_calls?.length) {
        formattedMessages.push(responseMessage);

        for (const toolCall of responseMessage.tool_calls) {
          toolsUsed.push(toolCall.function.name);
          let args: Record<string, unknown> = {};

          try {
            args = JSON.parse(toolCall.function.arguments || "{}");
          } catch {
            args = {};
          }

          const toolResult = await executeMcpTool(toolCall.function.name, args);
          formattedMessages.push({
            role: "tool",
            tool_call_id: toolCall.id,
            content: JSON.stringify(toolResult.result),
          });
        }
      }

      const finalResponse = responseMessage?.tool_calls?.length
        ? await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: formattedMessages,
            temperature: 0.3,
            max_tokens: 1024,
          })
        : undefined;

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content:
          finalResponse?.choices[0]?.message.content ||
          responseMessage?.content ||
          texts.errorGeneric,
        timestamp: Date.now(),
        toolsUsed,
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
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content: texts.welcomeMessage,
        timestamp: Date.now(),
        toolsUsed: ["get_profile_and_contact"],
      },
    ]);
  };

  const handleQuickQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div
      className={cn(
        "flex flex-col w-full max-w-4xl mx-auto rounded-3xl bg-[#121217]/90 backdrop-blur-2xl border border-white/10 shadow-[0_12px_48px_rgba(0,0,0,0.6)] overflow-hidden",
        className
      )}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
        <div className="flex items-center gap-3.5">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-accent/20 to-purple-600/30 border border-accent/40 text-accent shadow-[0_0_15px_rgba(0,216,255,0.3)]">
            <TbRobot className="text-2xl" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                Anderson AI Assistant
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent/15 text-accent border border-accent/30">
                {texts.badge}
              </span>
            </div>
            <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {texts.statusOnline}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleClearChat}
          aria-label={texts.clearButton}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-white/70 hover:text-white text-xs transition-all duration-200"
        >
          <TbRefresh className="text-sm" />
          <span className="hidden sm:inline">{texts.clearButton}</span>
        </button>
      </div>

      <div
        ref={chatContainerRef}
        className="flex-1 p-4 sm:p-6 space-y-4 overflow-y-auto max-h-[480px] min-h-[360px] scrollbar-thin scrollbar-thumb-white/10"
      >
        <AnimatePresence initial={false}>
          {messages.map((message) => {
            const isUser = message.role === "user";

            return (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  "flex items-start gap-3",
                  isUser ? "justify-end" : "justify-start"
                )}
              >
                {!isUser && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center mt-1">
                    <TbCpu className="text-lg" />
                  </div>
                )}

                <div
                  className={cn(
                    "flex flex-col space-y-2 max-w-[85%] sm:max-w-[78%] p-4 rounded-2xl text-sm leading-relaxed",
                    isUser
                      ? "bg-gradient-to-r from-light-blue/25 to-purple-600/35 border border-light-blue/40 text-white rounded-tr-none shadow-[0_4px_20px_rgba(0,216,255,0.15)]"
                      : "bg-[#181822]/90 border border-white/10 text-gray-200 rounded-tl-none shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                  )}
                >
                  {!isUser && message.toolsUsed && message.toolsUsed.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pb-1 border-b border-white/10">
                      {message.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-accent/10 border border-accent/30 text-accent"
                        >
                          <TbSparkles className="text-xs" />
                          <span>
                            {texts.mcpToolBadgePrefix}: {tool}
                          </span>
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="whitespace-pre-wrap break-words">
                    {message.content}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3 justify-start"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center mt-1">
              <TbCpu className="text-lg animate-pulse" />
            </div>
            <div className="p-4 rounded-2xl rounded-tl-none bg-[#181822]/90 border border-white/10 text-sm flex items-center gap-2 text-accent">
              <span className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 rounded-full bg-light-blue animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />
              </span>
              <span className="text-xs text-white/70 ml-1">
                {texts.thinkingText}
              </span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="px-4 sm:px-6 pt-2 pb-3 border-t border-white/10 bg-white/[0.01]">
        <div className="mb-3">
          <p className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-2">
            {texts.suggestedQuestionsTitle}
          </p>
          <div className="flex flex-wrap gap-2">
            {texts.suggestedQuestions.map((q) => (
              <button
                key={q}
                type="button"
                disabled={isLoading}
                onClick={() => handleQuickQuestionClick(q)}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-light-blue/40 text-xs text-white/80 hover:text-white transition-all duration-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            placeholder={texts.inputPlaceholder}
            className="flex-1 py-3.5 pl-4 pr-12 rounded-2xl bg-white/5 border border-white/15 focus:border-light-blue focus:bg-white/10 text-white placeholder:text-white/40 text-sm outline-none transition-all duration-300 disabled:opacity-60"
          />

          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            aria-label={texts.sendButton}
            className="absolute right-2 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-accent to-light-blue text-dark-gray hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_0_15px_rgba(0,216,255,0.4)]"
          >
            <TbSend className="text-lg text-black" />
          </button>
        </form>
      </div>
    </div>
  );
};
