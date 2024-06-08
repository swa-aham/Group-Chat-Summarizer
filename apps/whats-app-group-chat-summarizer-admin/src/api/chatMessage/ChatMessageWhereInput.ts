import { ChatFileWhereUniqueInput } from "../chatFile/ChatFileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ChatMessageWhereInput = {
  chatFile?: ChatFileWhereUniqueInput;
  id?: StringFilter;
  messageText?: StringNullableFilter;
  sender?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
