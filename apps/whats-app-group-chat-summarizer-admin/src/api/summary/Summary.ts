import { ChatFile } from "../chatFile/ChatFile";

export type Summary = {
  chatFile?: ChatFile | null;
  createdAt: Date;
  id: string;
  summaryText: string | null;
  updatedAt: Date;
};
