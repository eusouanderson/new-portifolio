import { McpToolDefinition } from "@/types/chat";

export const mcpTools: McpToolDefinition[] = [
  {
    type: "function",
    function: {
      name: "get_profile_and_contact",
      description: "Recupera dados biográficos, formação acadêmica, especialidades, status de carreira e informações de contato direto de Anderson Rodrigues (e-mail, WhatsApp, LinkedIn, GitHub).",
      parameters: {
        type: "object",
        properties: {
          detailLevel: {
            type: "string",
            description: "Nível de detalhe desejado",
            enum: ["summary", "full"],
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_skills_and_technologies",
      description: "Recupera o mapeamento detalhado de competências técnicas, linguagens de programação, frameworks, ferramentas de IA e bancos de dados dominados por Anderson.",
      parameters: {
        type: "object",
        properties: {
          category: {
            type: "string",
            description: "Filtrar por categoria específica",
            enum: ["all", "frontend", "backend", "ai_llm", "testing", "database", "devops"],
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_work_experience",
      description: "Retorna a trajetória profissional de Anderson, incluindo histórico de empresas, cargos, períodos, responsabilidades técnicas e realizações.",
      parameters: {
        type: "object",
        properties: {
          company: {
            type: "string",
            description: "Filtrar por empresa específica ou omitir para trazer todas",
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_projects",
      description: "Obtém a lista de projetos autorais em destaque criados por Anderson, incluindo descrições técnicas, links de repositório, demos e tecnologias aplicadas.",
      parameters: {
        type: "object",
        properties: {
          tag: {
            type: "string",
            description: "Filtrar projetos por tecnologia ou tag (ex: 'TypeScript', 'Vue.js', 'IA / LLM')",
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_ai_ecosystem",
      description: "Retorna detalhes arquiteturais das soluções autorais de IA e Servidores MCP criados por Anderson (AI Provider Hub, Suíte MCP, Project Memory MCP com MongoDB Atlas, DMC QA Agents).",
      parameters: {
        type: "object",
        properties: {
          solutionId: {
            type: "string",
            description: "Identificador opcional da solução (ex: 'ai-provider-hub', 'project-memory-mcp', 'mcp-servers-suite', 'dmc-qa-agents')",
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_github_repositories",
      description: "Consulta repositórios públicos atualizados do GitHub de Anderson Rodrigues (@eusouanderson), incluindo métricas de estrelas, linguagens, descrições e URLs.",
      parameters: {
        type: "object",
        properties: {
          limit: {
            type: "string",
            description: "Quantidade máxima de repositórios a retornar",
          },
        },
      },
    },
  },
];
