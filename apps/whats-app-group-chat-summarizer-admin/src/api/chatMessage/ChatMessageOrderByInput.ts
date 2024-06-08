import { SortOrder } from "../../util/SortOrder";

export type ChatMessageOrderByInput = {
  chatFileId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  messageText?: SortOrder;
  sender?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
