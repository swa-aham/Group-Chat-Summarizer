import { SummaryWhereInput } from "./SummaryWhereInput";
import { SummaryOrderByInput } from "./SummaryOrderByInput";

export type SummaryFindManyArgs = {
  where?: SummaryWhereInput;
  orderBy?: Array<SummaryOrderByInput>;
  skip?: number;
  take?: number;
};
