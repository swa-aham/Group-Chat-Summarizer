import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SummaryServiceBase } from "./base/summary.service.base";

@Injectable()
export class SummaryService extends SummaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
