import { ChatFileWhereUniqueInput } from "../chatFile/ChatFileWhereUniqueInput";

export type SummaryUpdateInput = {
  chatFile?: ChatFileWhereUniqueInput | null;
  summaryText?: string | null;
};
