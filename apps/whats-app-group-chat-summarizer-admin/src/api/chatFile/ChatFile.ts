import { ChatMessage } from "../chatMessage/ChatMessage";
import { Summary } from "../summary/Summary";

export type ChatFile = {
  chatMessages?: Array<ChatMessage>;
  createdAt: Date;
  fileContent: string | null;
  fileName: string | null;
  id: string;
  summaries?: Array<Summary>;
  updatedAt: Date;
};
