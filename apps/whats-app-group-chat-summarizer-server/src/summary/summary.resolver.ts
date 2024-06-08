import * as graphql from "@nestjs/graphql";
import { SummaryResolverBase } from "./base/summary.resolver.base";
import { Summary } from "./base/Summary";
import { SummaryService } from "./summary.service";

@graphql.Resolver(() => Summary)
export class SummaryResolver extends SummaryResolverBase {
  constructor(protected readonly service: SummaryService) {
    super(service);
  }
}
