import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SummaryService } from "./summary.service";
import { SummaryControllerBase } from "./base/summary.controller.base";

@swagger.ApiTags("summaries")
@common.Controller("summaries")
export class SummaryController extends SummaryControllerBase {
  constructor(protected readonly service: SummaryService) {
    super(service);
  }
}
