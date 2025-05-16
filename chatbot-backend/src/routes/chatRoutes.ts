import { Router } from "express";
import chatController from "../controllers/chatController";

const router = Router();

router.get("/ping", chatController.ping);
router.post("/api/chat", chatController.chat);

export default router;
