import { ChatFileWhereUniqueInput } from "../chatFile/ChatFileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SummaryWhereInput = {
  chatFile?: ChatFileWhereUniqueInput;
  id?: StringFilter;
  summaryText?: StringNullableFilter;
};
