import { ChatFileWhereUniqueInput } from "../chatFile/ChatFileWhereUniqueInput";

export type SummaryCreateInput = {
  chatFile?: ChatFileWhereUniqueInput | null;
  summaryText?: string | null;
};
