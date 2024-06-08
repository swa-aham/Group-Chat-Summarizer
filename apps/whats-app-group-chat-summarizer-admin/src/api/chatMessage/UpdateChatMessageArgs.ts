import { ChatMessageWhereUniqueInput } from "./ChatMessageWhereUniqueInput";
import { ChatMessageUpdateInput } from "./ChatMessageUpdateInput";

export type UpdateChatMessageArgs = {
  where: ChatMessageWhereUniqueInput;
  data: ChatMessageUpdateInput;
};
