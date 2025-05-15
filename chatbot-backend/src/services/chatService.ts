import fs from "fs";
import path from "path";
import { QAPair } from "../types/chat";

class ChatService {
  private predefinedResponses: QAPair[] = [];

  constructor() {
    this.loadResponses();
  }

  private loadResponses(): void {
    try {
      const filePath = path.join(__dirname, "../../data/response.json");
      const fileContent = fs.readFileSync(filePath, "utf-8");
      this.predefinedResponses = JSON.parse(fileContent);
    } catch (error) {
      console.error("Failed to load responses.json:", error);
    }
  }

  public generateResponse(userMessage: string): string {
    const fallbackResponse =
      this.predefinedResponses.find((r) => r.fallback)?.answer ||
      "Sorry, I can't respond right now.";

    const matchedResponse = this.predefinedResponses.find((qa) =>
      qa.keywords?.some((keyword) =>
        userMessage.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    return matchedResponse?.answer || fallbackResponse;
  }
}

export default new ChatService();
