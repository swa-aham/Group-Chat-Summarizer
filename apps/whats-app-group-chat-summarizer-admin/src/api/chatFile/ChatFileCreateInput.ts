import { ChatMessageCreateNestedManyWithoutChatFilesInput } from "./ChatMessageCreateNestedManyWithoutChatFilesInput";
import { SummaryCreateNestedManyWithoutChatFilesInput } from "./SummaryCreateNestedManyWithoutChatFilesInput";

export type ChatFileCreateInput = {
  chatMessages?: ChatMessageCreateNestedManyWithoutChatFilesInput;
  fileContent?: string | null;
  fileName?: string | null;
  summaries?: SummaryCreateNestedManyWithoutChatFilesInput;
};
