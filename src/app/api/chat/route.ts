import { executeMcpTool } from "@/lib/mcp/executor";
import { mcpTools } from "@/lib/mcp/tools-definitions";
import { ChatApiRequest, ChatApiResponse } from "@/types/chat";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `Você é o Agente Autônomo e Assistente Oficial do portfólio de Anderson Rodrigues, Engenheiro de Software Fullstack e Especialista em IA (MCP, RAG, Agentes Autônomos).
Sua missão é responder a recrutadores, desenvolvedores e clientes sobre as competências, projetos, experiências profissionais e contatos do Anderson.

Diretrizes obrigatórias:
1. Sempre utilize as ferramentas (MCP Tools) disponíveis para consultar os dados reais e precisos do Anderson antes de responder. Nunca invente dados.
2. Seja objetivo, técnico, cortês e profissional. Use markdown elegante (tópicos com marcadores, negrito e links).
3. Adapte seu idioma ao do usuário (se perguntar em português, responda em português; se em inglês, responda em inglês).
4. Destaque os diferenciais do Anderson: domínio em TypeScript, ecossistema Vue 3 (Composition API/Pinia), React/Next.js, APIs de alto desempenho (Express/Hono/Node.js), testes automatizados de alta cobertura (Vitest/Jest) e soluções autorais em IA com Model Context Protocol (MCP).`;

const runLocalFallback = async (userPrompt: string): Promise<ChatApiResponse> => {
  const lower = userPrompt.toLowerCase();
  const toolsUsed: string[] = [];

  if (lower.includes("projeto") || lower.includes("project") || lower.includes("crm") || lower.includes("aplicac") || lower.includes("app")) {
    toolsUsed.push("get_projects");
    const { result } = await executeMcpTool("get_projects");
    const projectsList = Array.isArray(result) ? result.slice(0, 4) : [];
    
    const formatted = projectsList
      .map((p) => `* **${p.title}**: ${p.description}\n  *Tecnologias*: ${p.tags?.join(", ")}`)
      .join("\n\n");

    return {
      message: `Aqui estão alguns dos principais projetos autorais desenvolvidos pelo Anderson:\n\n${formatted}\n\nVocê também pode navegar pela seção de Projetos ou consultar os repositórios públicos no GitHub!`,
      toolsUsed,
    };
  }

  if (lower.includes("github") || lower.includes("repo") || lower.includes("codigo") || lower.includes("código")) {
    toolsUsed.push("get_github_repositories");
    const { result } = await executeMcpTool("get_github_repositories", { limit: "5" });
    const reposList = Array.isArray(result) ? result : [];

    const formatted = reposList
      .map((r) => `* [**${r.name}**](${r.html_url}) (${r.language}) - ${r.description} (⭐ ${r.stargazers_count})`)
      .join("\n");

    return {
      message: `Aqui estão alguns dos repositórios públicos mais recentes do Anderson no GitHub (@eusouanderson):\n\n${formatted}\n\nSinta-se à vontade para explorar e conferir o código-fonte!`,
      toolsUsed,
    };
  }

  if (lower.includes("ia") || lower.includes("ai") || lower.includes("mcp") || lower.includes("rag") || lower.includes("agent") || lower.includes("agente")) {
    toolsUsed.push("get_ai_ecosystem");
    const { result } = await executeMcpTool("get_ai_ecosystem");
    const data = result as { solutions?: Array<{ title: string; badge: string; description: string }> };
    const solutions = data?.solutions || [];

    const formatted = solutions
      .map((s) => `* **${s.title}** (${s.badge}): ${s.description}`)
      .join("\n\n");

    return {
      message: `O Anderson possui forte especialização em Engenharia de IA e arquitetura agêntica:\n\n${formatted}\n\nEle desenvolveu mais de 15 servidores MCP proprietários e extensões com suporte a múltiplos provedores (Claude, Gemini, OpenAI e Groq).`,
      toolsUsed,
    };
  }

  if (lower.includes("experienc") || lower.includes("carreira") || lower.includes("trabalh") || lower.includes("empresa") || lower.includes("comerc")) {
    toolsUsed.push("get_work_experience");
    const { result } = await executeMcpTool("get_work_experience");
    const exps = Array.isArray(result) ? result.slice(0, 4) : [];

    const formatted = exps
      .map((e) => `* **${e.name}** em **${e.companyName}** (${e.from} até ${e.to || "atual"}):\n  ${e.description}`)
      .join("\n\n");

    return {
      message: `Aqui está um resumo da trajetória profissional do Anderson:\n\n${formatted}`,
      toolsUsed,
    };
  }

  if (lower.includes("skill") || lower.includes("tecnolog") || lower.includes("stack") || lower.includes("linguagem") || lower.includes("vue") || lower.includes("typescript") || lower.includes("react")) {
    toolsUsed.push("get_skills_and_technologies");
    const { result } = await executeMcpTool("get_skills_and_technologies");
    const categories = Array.isArray(result) ? result : [];

    const formatted = categories
      .map((c) => `* **${c.category.toUpperCase()}**: ${c.items.slice(0, 5).join(", ")}`)
      .join("\n");

    return {
      message: `O Anderson domina um ecossistema completo de tecnologias modernas:\n\n${formatted}\n\nCom ênfase total em TypeScript estrito, Vue 3, testes automatizados e arquitetura agêntica.`,
      toolsUsed,
    };
  }

  toolsUsed.push("get_profile_and_contact");
  const { result } = await executeMcpTool("get_profile_and_contact");
  const profile = result as { name: string; role: string; bio: string; contacts: { email: string; linkedin: string; github: string } };

  return {
    message: `Olá! Sou o assistente de IA do portfólio de **${profile.name}**.\n\n${profile.role}.\n\nPosso te ajudar a descobrir detalhes sobre:\n* **Projetos e Repositórios GitHub**\n* **Tecnologias e Stacks (Vue 3, TypeScript, Next.js, APIs)**\n* **Experiência Profissional e Empresas**\n* **Ecossistema de IA & Servidores MCP**\n* **Informações de Contato e Contratação**\n\nO que você gostaria de explorar?`,
    toolsUsed,
  };
};

export async function POST(req: NextRequest) {
  try {
    const body: ChatApiRequest = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Nenhuma mensagem fornecida." },
        { status: 400 }
      );
    }

    const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
    const userPrompt = lastUserMessage?.content || "";

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey || apiKey.trim() === "") {
      const fallbackResponse = await runLocalFallback(userPrompt);
      return NextResponse.json(fallbackResponse);
    }

    const groq = new OpenAI({
      apiKey,
      baseURL: "https://api.groq.com/openai/v1",
    });

    const formattedMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((m) => ({
        role: m.role as "user" | "assistant" | "system",
        content: m.content,
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

    const choice = initialResponse.choices[0];
    const message = choice.message;
    const toolsUsed: string[] = [];

    if (message.tool_calls && message.tool_calls.length > 0) {
      formattedMessages.push(message);

      for (const toolCall of message.tool_calls) {
        const functionName = toolCall.function.name;
        toolsUsed.push(functionName);

        let parsedArgs: Record<string, unknown> = {};
        try {
          parsedArgs = JSON.parse(toolCall.function.arguments || "{}");
        } catch {
          parsedArgs = {};
        }

        const toolResult = await executeMcpTool(functionName, parsedArgs);

        formattedMessages.push({
          role: "tool",
          tool_call_id: toolCall.id,
          content: JSON.stringify(toolResult.result),
        });
      }

      const secondResponse = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: formattedMessages,
        temperature: 0.3,
        max_tokens: 1024,
      });

      const finalContent = secondResponse.choices[0]?.message?.content || "";

      return NextResponse.json({
        message: finalContent,
        toolsUsed,
      });
    }

    return NextResponse.json({
      message: message.content || "",
      toolsUsed: [],
    });
  } catch (error) {
    const err = error as Error;
    const fallbackResponse = await runLocalFallback("visão geral");
    return NextResponse.json({
      ...fallbackResponse,
      error: err.message,
    });
  }
}
