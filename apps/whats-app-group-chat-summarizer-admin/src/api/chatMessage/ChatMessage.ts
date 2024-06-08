import { ChatFile } from "../chatFile/ChatFile";

export type ChatMessage = {
  chatFile?: ChatFile | null;
  createdAt: Date;
  id: string;
  messageText: string | null;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
