import { ChatFile as TChatFile } from "../api/chatFile/ChatFile";

export const CHATFILE_TITLE_FIELD = "fileName";

export const ChatFileTitle = (record: TChatFile): string => {
  return record.fileName?.toString() || String(record.id);
};
