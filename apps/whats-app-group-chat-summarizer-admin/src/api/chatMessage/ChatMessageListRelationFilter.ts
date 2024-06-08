import { ChatMessageWhereInput } from "./ChatMessageWhereInput";

export type ChatMessageListRelationFilter = {
  every?: ChatMessageWhereInput;
  some?: ChatMessageWhereInput;
  none?: ChatMessageWhereInput;
};
