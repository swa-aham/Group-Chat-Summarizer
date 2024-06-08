import { ChatFileWhereInput } from "./ChatFileWhereInput";
import { ChatFileOrderByInput } from "./ChatFileOrderByInput";

export type ChatFileFindManyArgs = {
  where?: ChatFileWhereInput;
  orderBy?: Array<ChatFileOrderByInput>;
  skip?: number;
  take?: number;
};
