import { Request, Response } from "express";
import { ChatRequest, ChatResponse } from "../types/chat";
import chatService from "../services/chatService";

class ChatController {
  public async chat(
    req: Request<{}, {}, ChatRequest>,
    res: Response<ChatResponse>
  ): Promise<void> {
    try {
      const userMessage = req.body.message;
      console.log("Received message:", userMessage);

      const botReply = chatService.generateResponse(userMessage);
      res.json({ reply: botReply });
    } catch (error) {
      console.error("Error in chat controller:", error);
      res
        .status(500)
        .json({ reply: "An error occurred while processing your request." });
    }
  }

  public ping(_req: Request, res: Response<string>): void {
    res.send("pong");
  }
}

export default new ChatController();
