import { AiChatTexts } from "@/types/texts";

export const aiChat: AiChatTexts = {
  title: "AI Chat & MCP Protocol",
  subtitle: "Real-Time Autonomous Agent",
  description:
    "Interact directly with the portfolio's intelligent assistant powered by Groq LLM and Model Context Protocol (MCP). The AI queries in real-time my profile data, authorial projects, technical skills, career history, and GitHub repositories.",
  badge: "Groq LLM + Local MCP",
  statusOnline: "MCP Agent Active",
  inputPlaceholder: "Ask about my stacks, projects, repositories, or background...",
  sendButton: "Send",
  thinkingText: "Querying local MCP Tools...",
  clearButton: "Clear Chat",
  suggestedQuestionsTitle: "Quick Prompt Suggestions:",
  suggestedQuestions: [
    "What are Anderson's main technologies and stacks?",
    "Tell me about his experience with AI, Agents, and MCP servers.",
    "What are his most prominent highlighted projects?",
    "What public repositories does he maintain on GitHub?",
    "What is his career history and past companies?",
  ],
  mcpToolBadgePrefix: "MCP Tool",
  welcomeMessage:
    "Hello! I am the autonomous assistant for Anderson Rodrigues' portfolio. I can dynamically fetch data about his projects, GitHub repos, technical skills, and career using Model Context Protocol (MCP) tools. How can I help you today?",
  errorGeneric: "A temporary connection issue occurred. Please try again shortly.",
  groqMissingNotice: "Groq key configured via .env with ultra-fast inference.",
};
