import { SortOrder } from "../../util/SortOrder";

export type SummaryOrderByInput = {
  chatFileId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  summaryText?: SortOrder;
  updatedAt?: SortOrder;
};
