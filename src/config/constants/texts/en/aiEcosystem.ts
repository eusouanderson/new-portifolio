import { AiEcosystemTexts } from "@/types/texts";
import { tags } from "../../tags";

export const aiEcosystem: AiEcosystemTexts = {
  title: "AI Engineering & MCP Tools",
  subtitle: "Authorial Solutions & Agentic Architecture",
  description:
    "Engineering advanced Artificial Intelligence ecosystems, including custom MCP servers, persistent context with MongoDB Atlas, and multi-model orchestration extensions.",
  viewRepo: "View Repository",
  viewDetails: "Click to view details",
  highlightsLabel: "Highlights & Capabilities",
  solutions: [
    {
      id: "ai-provider-hub",
      title: "AI Provider Hub",
      badge: "VS Code Extension",
      description:
        "Visual Studio Code extension unifying multiple AI providers into a single interface with native Model Context Protocol (MCP) support.",
      features: [
        "Unified orchestration for Claude, Gemini, Copilot, OpenAI, and Groq",
        "AST analysis and code manipulation with Tree-Sitter, Babel Parser, and ts-morph",
        "Interactive Webview UI with chat panel and secure tool execution",
        "Automated testing suite with Vitest and Jest",
      ],
      tags: [tags["TypeScript"], tags["MCP"], tags["IA / LLM"], tags["Vitest"], tags["Jest"]],
      icon: "hub",
      github: "https://github.com/eusouanderson/ai-provider-hub",
    },
    {
      id: "mcp-servers-suite",
      title: "Enterprise MCP Servers Suite",
      badge: "@mcp-server",
      description:
        "Suite of over 15 MCP servers providing strict architectural visibility into controllers, DTOs, stores, and components for autonomous AI agents.",
      features: [
        "Deep structural mapping of routes, controllers, and models across enterprise backends",
        "Dedicated scanners for Vue 3 frontends, Pinia stores, routes, and Design System components",
        "Command orchestrator with automated TypeScript type generation and sync",
        "Dedicated servers for Puppeteer crawlers and integration mocks",
      ],
      tags: [tags["MCP"], tags["TypeScript"], tags["Node.js"], tags["Vue 3"], tags["Pinia"]],
      icon: "mcp",
    },
    {
      id: "project-memory-mcp",
      title: "Project Memory MCP",
      badge: "Semantic Memory with MongoDB Atlas",
      description:
        "MCP server designed for long-term memory persistence of LLM agents, ensuring uninterrupted context continuity across sessions.",
      features: [
        "Structured persistence and contextual retrieval on MongoDB Atlas",
        "Automated semantic deduplication for continuous memory consolidation",
        "Tracking of architectural decisions, bug investigations, and technical skills",
        "Decoupled architecture following SOLID principles (repositories, handlers, and services)",
      ],
      tags: [tags["MCP"], tags["IA / LLM"], tags["MongoDB"], tags["TypeScript"], tags["Testes Automatizados"]],
      icon: "memory",
    },
    {
      id: "dmc-qa-agents",
      title: "AI Agent QA Framework",
      badge: "Automation & Orchestration",
      description:
        "Quality assurance and test automation environment integrated with agentic workflows for autonomous end-to-end testing and reporting.",
      features: [
        "Orchestration of complex test suites with autonomous AI agents",
        "End-to-end flow validation and comprehensive coverage reporting",
        "Continuous integration and reliable delivery pipelines",
      ],
      tags: [tags["IA / LLM"], tags["Python"], tags["Testes Automatizados"]],
      icon: "qa",
    },
  ],
};

