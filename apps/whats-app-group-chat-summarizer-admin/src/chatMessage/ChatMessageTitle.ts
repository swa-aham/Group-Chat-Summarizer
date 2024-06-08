import { ChatMessage as TChatMessage } from "../api/chatMessage/ChatMessage";

export const CHATMESSAGE_TITLE_FIELD = "sender";

export const ChatMessageTitle = (record: TChatMessage): string => {
  return record.sender?.toString() || String(record.id);
};
