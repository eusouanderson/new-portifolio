export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
  toolsUsed?: string[];
  isError?: boolean;
}

export interface ChatApiRequest {
  messages: Array<{
    role: "user" | "assistant" | "system";
    content: string;
  }>;
  language?: string;
}

export interface ChatApiResponse {
  message: string;
  toolsUsed: string[];
  error?: string;
}

export interface McpToolFunctionParameter {
  type: string;
  description?: string;
  enum?: string[];
}

export interface McpToolDefinition {
  type: "function";
  function: {
    name: string;
    description: string;
    parameters: {
      type: "object";
      properties: Record<string, McpToolFunctionParameter>;
      required?: string[];
    };
  };
}
