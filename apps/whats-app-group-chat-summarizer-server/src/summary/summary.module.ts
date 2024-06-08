import { Module } from "@nestjs/common";
import { SummaryModuleBase } from "./base/summary.module.base";
import { SummaryService } from "./summary.service";
import { SummaryController } from "./summary.controller";
import { SummaryResolver } from "./summary.resolver";

@Module({
  imports: [SummaryModuleBase],
  controllers: [SummaryController],
  providers: [SummaryService, SummaryResolver],
  exports: [SummaryService],
})
export class SummaryModule {}
