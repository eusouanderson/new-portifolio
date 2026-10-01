import {
  getAiEcosystemData,
  getGithubRepositoriesData,
  getProfileData,
  getProjectsData,
  getSkillsData,
  getWorkExperienceData,
} from "./data-provider";

export interface ToolExecutionResult {
  toolName: string;
  result: unknown;
}

export const executeMcpTool = async (
  name: string,
  args: Record<string, unknown> = {}
): Promise<ToolExecutionResult> => {
  switch (name) {
    case "get_profile_and_contact": {
      const data = getProfileData();
      return { toolName: name, result: data };
    }

    case "get_skills_and_technologies": {
      const category = typeof args.category === "string" ? args.category : undefined;
      const data = getSkillsData(category);
      return { toolName: name, result: data };
    }

    case "get_work_experience": {
      const company = typeof args.company === "string" ? args.company : undefined;
      const data = getWorkExperienceData(company);
      return { toolName: name, result: data };
    }

    case "get_projects": {
      const tag = typeof args.tag === "string" ? args.tag : undefined;
      const data = getProjectsData(tag);
      return { toolName: name, result: data };
    }

    case "get_ai_ecosystem": {
      const solutionId = typeof args.solutionId === "string" ? args.solutionId : undefined;
      const data = getAiEcosystemData(solutionId);
      return { toolName: name, result: data };
    }

    case "get_github_repositories": {
      const limit = typeof args.limit === "string" ? args.limit : undefined;
      const data = await getGithubRepositoriesData(limit);
      return { toolName: name, result: data };
    }

    default:
      return {
        toolName: name,
        result: { error: `Ferramenta '${name}' não encontrada no catálogo local.` },
      };
  }
};
