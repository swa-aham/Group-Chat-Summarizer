import { ChatMessageListRelationFilter } from "../chatMessage/ChatMessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SummaryListRelationFilter } from "../summary/SummaryListRelationFilter";

export type ChatFileWhereInput = {
  chatMessages?: ChatMessageListRelationFilter;
  fileContent?: StringNullableFilter;
  fileName?: StringNullableFilter;
  id?: StringFilter;
  summaries?: SummaryListRelationFilter;
};
