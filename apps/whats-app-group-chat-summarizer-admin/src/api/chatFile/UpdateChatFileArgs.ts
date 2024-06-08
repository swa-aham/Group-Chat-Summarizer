import { ChatFileWhereUniqueInput } from "./ChatFileWhereUniqueInput";
import { ChatFileUpdateInput } from "./ChatFileUpdateInput";

export type UpdateChatFileArgs = {
  where: ChatFileWhereUniqueInput;
  data: ChatFileUpdateInput;
};
