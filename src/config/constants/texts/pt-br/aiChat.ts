import { AiChatTexts } from "@/types/texts";

export const aiChat: AiChatTexts = {
  title: "Chat com IA & Protocolo MCP",
  subtitle: "Assistente Autônomo em Tempo Real",
  description:
    "Interaja diretamente com o assistente inteligente do portfólio alimentado por LLM via Groq e MCP (Model Context Protocol). A IA consulta em tempo real meus dados, projetos autorais, competências técnicas, histórico profissional e repositórios do GitHub.",
  badge: "Groq LLM + MCP Local",
  statusOnline: "Agente MCP Ativo",
  inputPlaceholder: "Pergunte sobre minhas stacks, projetos, repositórios ou experiência...",
  sendButton: "Enviar",
  thinkingText: "Consultando MCP Tools locais...",
  clearButton: "Limpar Chat",
  suggestedQuestionsTitle: "Sugestões de Perguntas Rápidas:",
  suggestedQuestions: [
    "Quais são as principais tecnologias e stacks do Anderson?",
    "Me fale sobre a experiência dele com IA, Agentes e servidores MCP.",
    "Quais são os projetos de maior destaque desenvolvidos por ele?",
    "Quais repositórios públicos ele possui no GitHub?",
    "Qual é o histórico de empresas e experiência profissional?",
  ],
  mcpToolBadgePrefix: "MCP Tool",
  welcomeMessage:
    "Olá! Sou o assistente autônomo do portfólio de Anderson Rodrigues. Posso buscar dados dinâmicos sobre seus projetos, repositórios do GitHub, competências técnicas e carreira utilizando ferramentas do Model Context Protocol (MCP). O que você gostaria de saber?",
  errorGeneric: "Ocorreu uma instabilidade momentânea na conexão. Tente novamente em instantes.",
  groqMissingNotice: "Chave Groq configurada via .env com resposta ultra-rápida.",
};
