"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chatService_1 = __importDefault(require("../services/chatService"));
class ChatController {
    chat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userMessage = req.body.message;
                console.log("Received message:", userMessage);
                const botReply = chatService_1.default.generateResponse(userMessage);
                res.json({ reply: botReply });
            }
            catch (error) {
                console.error("Error in chat controller:", error);
                res
                    .status(500)
                    .json({ reply: "An error occurred while processing your request." });
            }
        });
    }
    ping(_req, res) {
        res.send("pong");
    }
    home(_req, res) {
        res.send("Hello World!");
    }
}
exports.default = new ChatController();
