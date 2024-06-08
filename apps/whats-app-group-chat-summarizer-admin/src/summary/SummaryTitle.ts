import { Summary as TSummary } from "../api/summary/Summary";

export const SUMMARY_TITLE_FIELD = "id";

export const SummaryTitle = (record: TSummary): string => {
  return record.id?.toString() || String(record.id);
};
