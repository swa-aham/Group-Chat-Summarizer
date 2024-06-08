import { ChatMessageWhereInput } from "./ChatMessageWhereInput";
import { ChatMessageOrderByInput } from "./ChatMessageOrderByInput";

export type ChatMessageFindManyArgs = {
  where?: ChatMessageWhereInput;
  orderBy?: Array<ChatMessageOrderByInput>;
  skip?: number;
  take?: number;
};
