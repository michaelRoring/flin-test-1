export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply: string;
}

export interface QAPair {
  keywords?: string[];
  answer: string;
  fallback?: boolean;
}
