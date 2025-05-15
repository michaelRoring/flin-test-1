"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class ChatService {
    constructor() {
        this.predefinedResponses = [];
        this.loadResponses();
    }
    loadResponses() {
        try {
            const filePath = path_1.default.join(__dirname, "../../data/response.json");
            const fileContent = fs_1.default.readFileSync(filePath, "utf-8");
            this.predefinedResponses = JSON.parse(fileContent);
        }
        catch (error) {
            console.error("Failed to load responses.json:", error);
        }
    }
    generateResponse(userMessage) {
        var _a;
        const fallbackResponse = ((_a = this.predefinedResponses.find((r) => r.fallback)) === null || _a === void 0 ? void 0 : _a.answer) ||
            "Sorry, I can't respond right now.";
        const matchedResponse = this.predefinedResponses.find((qa) => {
            var _a;
            return (_a = qa.keywords) === null || _a === void 0 ? void 0 : _a.some((keyword) => userMessage.toLowerCase().includes(keyword.toLowerCase()));
        });
        return (matchedResponse === null || matchedResponse === void 0 ? void 0 : matchedResponse.answer) || fallbackResponse;
    }
}
exports.default = new ChatService();
