import { ChatMessageUpdateManyWithoutChatFilesInput } from "./ChatMessageUpdateManyWithoutChatFilesInput";
import { SummaryUpdateManyWithoutChatFilesInput } from "./SummaryUpdateManyWithoutChatFilesInput";

export type ChatFileUpdateInput = {
  chatMessages?: ChatMessageUpdateManyWithoutChatFilesInput;
  fileContent?: string | null;
  fileName?: string | null;
  summaries?: SummaryUpdateManyWithoutChatFilesInput;
};
