import { ChatFileWhereUniqueInput } from "../chatFile/ChatFileWhereUniqueInput";

export type ChatMessageCreateInput = {
  chatFile?: ChatFileWhereUniqueInput | null;
  messageText?: string | null;
  sender?: string | null;
  timestamp?: Date | null;
};
