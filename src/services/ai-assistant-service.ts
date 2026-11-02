import { executeMcpTool, ToolExecutionResult } from "@/lib/mcp/executor";
import { mcpTools } from "@/lib/mcp/tools-definitions";
import { ChatMessage } from "@/types/chat";
import OpenAI from "openai";

export interface SendMessageParams {
  query: string;
  history: ChatMessage[];
  systemPrompt: string;
}

export interface AssistantResponse {
  content: string;
  toolsUsed: string[];
}

export class AiAssistantService {
  public static async processMessage({
    query,
    history,
    systemPrompt,
  }: SendMessageParams): Promise<AssistantResponse> {
    const apiKey = typeof process !== "undefined" ? process.env.NEXT_PUBLIC_GROQ_API_KEY : undefined;

    if (apiKey) {
      return this.executeWithGroqApi(apiKey, query, history, systemPrompt);
    }

    return this.executeWithLocalMcpEngine(query);
  }

  private static async executeWithGroqApi(
    apiKey: string,
    query: string,
    history: ChatMessage[],
    systemPrompt: string
  ): Promise<AssistantResponse> {
    const client = new OpenAI({
      apiKey,
      baseURL: "https://api.groq.com/openai/v1",
      dangerouslyAllowBrowser: true,
    });

    const userMessage = { role: "user" as const, content: query };
    const apiMessages = [...history, userMessage].map((m) => ({
      role: m.role,
      content: m.content,
    }));

    const formattedMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: systemPrompt },
      ...apiMessages.map((msg) => ({
        role: msg.role as "user" | "assistant" | "system",
        content: msg.content,
      })),
    ];

    const initialResponse = await client.chat.completions.create({
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

      const finalResponse = await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: formattedMessages,
        temperature: 0.3,
        max_tokens: 1024,
      });

      return {
        content: finalResponse.choices[0]?.message.content || responseMessage.content || "",
        toolsUsed,
      };
    }

    return {
      content: responseMessage?.content || "",
      toolsUsed,
    };
  }

  private static async executeWithLocalMcpEngine(query: string): Promise<AssistantResponse> {
    const normalized = query
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const toolsUsed: string[] = [];

    if (
      normalized.includes("skill") ||
      normalized.includes("tecnologia") ||
      normalized.includes("stack") ||
      normalized.includes("linguagem") ||
      normalized.includes("vue") ||
      normalized.includes("react") ||
      normalized.includes("typescript") ||
      normalized.includes("node")
    ) {
      toolsUsed.push("get_skills_and_technologies");
      const res: ToolExecutionResult = await executeMcpTool("get_skills_and_technologies");
      const data = res.result as Array<{ category: string; items: string[] }>;
      const text = [
        "### Competências e Tecnologias Principais\n",
        ...data.map(
          (cat) => `**${cat.category.toUpperCase()}**:\n` + cat.items.map((i) => `* ${i}`).join("\n")
        ),
      ].join("\n\n");
      return { content: text, toolsUsed };
    }

    if (
      normalized.includes("projeto") ||
      normalized.includes("portfolio") ||
      normalized.includes("app") ||
      normalized.includes("sistema")
    ) {
      toolsUsed.push("get_projects");
      const res: ToolExecutionResult = await executeMcpTool("get_projects");
      const list = res.result as Array<{ title: string; description: string; tags: string[]; liveUrl?: string }>;
      const text = [
        "### Principais Projetos do Anderson\n",
        ...list.slice(0, 5).map(
          (p) => `* **${p.title}**: ${p.description}\n  *Stack*: \`${p.tags.join("`, `")}\``
        ),
        "\nVocê pode conferir todos os detalhes e links interativos na seção de **Projetos** logo abaixo!",
      ].join("\n\n");
      return { content: text, toolsUsed };
    }

    if (
      normalized.includes("experiencia") ||
      normalized.includes("carreira") ||
      normalized.includes("empresa") ||
      normalized.includes("comerc") ||
      normalized.includes("trabalho") ||
      normalized.includes("historico")
    ) {
      toolsUsed.push("get_work_experience");
      const res: ToolExecutionResult = await executeMcpTool("get_work_experience");
      const list = res.result as Array<{ role: string; company: string; period: string; description: string }>;
      const text = [
        "### Trajetória Profissional\n",
        ...list.map(
          (exp) => `* **${exp.role}** na **${exp.company}** (${exp.period})\n  ${exp.description}`
        ),
      ].join("\n\n");
      return { content: text, toolsUsed };
    }

    if (
      normalized.includes("ia") ||
      normalized.includes("ai") ||
      normalized.includes("mcp") ||
      normalized.includes("agente") ||
      normalized.includes("provider") ||
      normalized.includes("rag")
    ) {
      toolsUsed.push("get_ai_ecosystem");
      const res: ToolExecutionResult = await executeMcpTool("get_ai_ecosystem");
      const data = res.result as { title: string; description: string; solutions: Array<{ title: string; description: string; badge: string }> };
      const text = [
        "### Soluções Autorais em Engenharia de IA & MCP\n",
        ...data.solutions.map(
          (item) => `* **${item.title}** [\`${item.badge}\`]:\n  ${item.description}`
        ),
      ].join("\n\n");
      return { content: text, toolsUsed };
    }

    if (
      normalized.includes("github") ||
      normalized.includes("repositorio") ||
      normalized.includes("codigo")
    ) {
      toolsUsed.push("get_github_repositories");
      const res: ToolExecutionResult = await executeMcpTool("get_github_repositories");
      const list = res.result as Array<{ name: string; description: string; html_url: string; language?: string }>;
      const text = [
        "### Repositórios em Destaque no GitHub\n",
        ...list.slice(0, 6).map(
          (r) => `* [**${r.name}**](${r.html_url}): ${r.description || "Projeto open-source"} (\`${r.language || "TypeScript"}\`)`
        ),
      ].join("\n\n");
      return { content: text, toolsUsed };
    }

    toolsUsed.push("get_profile_and_contact");
    const res: ToolExecutionResult = await executeMcpTool("get_profile_and_contact");
    const profile = res.result as {
      name: string;
      role: string;
      bio: string;
      contacts: { email: string; linkedin: string; github: string; whatsapp: string };
    };

    const text = [
      `### ${profile.name}`,
      `**${profile.role}**\n`,
      profile.bio,
      "\n**Canais de Contato Direto**:",
      `* **Email**: [${profile.contacts.email}](mailto:${profile.contacts.email})`,
      `* **LinkedIn**: [Perfil Oficial](${profile.contacts.linkedin})`,
      `* **GitHub**: [github.com/eusouanderson](${profile.contacts.github})`,
      `* **WhatsApp**: [Conversar no WhatsApp](${profile.contacts.whatsapp})`,
      "\n*Dica: Você pode me perguntar sobre experiências profissionais, projetos, stack técnica ou ecossistema de ferramentas MCP!*",
    ].join("\n\n");

    return { content: text, toolsUsed };
  }
}
