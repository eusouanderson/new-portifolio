import { AiEcosystemTexts } from "@/types/texts";
import { tags } from "../../tags";

export const aiEcosystem: AiEcosystemTexts = {
  title: "Engenharia de IA & Ferramentas MCP",
  subtitle: "Soluções Autorais & Arquitetura Agêntica",
  description:
    "Desenvolvimento de ecossistemas avançados para Inteligência Artificial, abrangendo servidores MCP personalizados, persistência de contexto em MongoDB Atlas e extensões de orquestração para múltiplos modelos de linguagem.",
  solutions: [
    {
      id: "ai-provider-hub",
      title: "AI Provider Hub",
      badge: "Extensão VS Code",
      description:
        "Extensão para Visual Studio Code que unifica múltiplos provedores de IA em uma interface única com suporte nativo ao Model Context Protocol (MCP).",
      features: [
        "Integração unificada com Claude, Gemini, Copilot, OpenAI e Groq",
        "Análise e manipulação de AST com Tree-Sitter, Babel Parser e ts-morph",
        "Interface interativa em Webview UI com painel de chat e execução de ferramentas",
        "Suíte de testes automatizados com Vitest e Jest",
      ],
      tags: [tags["TypeScript"], tags["MCP"], tags["IA / LLM"], tags["Vitest"], tags["Jest"]],
      icon: "hub",
      github: "https://github.com/eusouanderson/ai-provider-hub",
    },
    {
      id: "mcp-servers-suite",
      title: "Suíte Corporativa de Servidores MCP",
      badge: "@dmc/engine-mcp-server",
      description:
        "Conjunto de mais de 15 servidores MCP que oferecem visibilidade estrita de arquitetura, controllers, DTOs, stores e componentes para agentes autônomos de IA.",
      features: [
        "Mapeamento profundo de rotas, controllers e models de backends corporativos",
        "Scanners especializados para frontends Vue 3, Pinia, rotas e Design System",
        "Orquestrador de comandos com sincronização automática de tipagens TypeScript",
        "Servidores dedicados para crawlers Puppeteer e mocks de integração",
      ],
      tags: [tags["MCP"], tags["TypeScript"], tags["Node.js"], tags["Vue 3"], tags["Pinia"]],
      icon: "mcp",
    },
    {
      id: "project-memory-mcp",
      title: "Project Memory MCP",
      badge: "Memória Semântica com MongoDB Atlas",
      description:
        "Servidor MCP projetado para persistência de memória de longo prazo de agentes LLM, garantindo continuidade de contexto entre sessões.",
      features: [
        "Persistência estruturada e busca contextual no MongoDB Atlas",
        "Deduplicação semântica automática para consolidação inteligente de memórias",
        "Rastreamento de decisões arquiteturais, investigações de bugs e skills técnicas",
        "Camadas desacopladas seguindo SOLID (repositories, handlers e services)",
      ],
      tags: [tags["MCP"], tags["IA / LLM"], tags["MongoDB"], tags["TypeScript"], tags["Testes Automatizados"]],
      icon: "memory",
    },
    {
      id: "dmc-qa-agents",
      title: "Framework de QA com Agentes de IA",
      badge: "Automação e Orquestração",
      description:
        "Ambiente de validação e garantia de qualidade integrado a fluxos agênticos para execução autônoma de testes end-to-end e relatórios.",
      features: [
        "Orquestração de suítes de testes complexas com agentes de IA",
        "Validação de fluxos de ponta a ponta e geração de relatórios de cobertura",
        "Integração contínua e pipelines de entrega confiável",
      ],
      tags: [tags["IA / LLM"], tags["Python"], tags["Testes Automatizados"]],
      icon: "qa",
    },
  ],
};

