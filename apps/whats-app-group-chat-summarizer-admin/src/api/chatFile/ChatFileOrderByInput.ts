import { SortOrder } from "../../util/SortOrder";

export type ChatFileOrderByInput = {
  createdAt?: SortOrder;
  fileContent?: SortOrder;
  fileName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
