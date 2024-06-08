import * as graphql from "@nestjs/graphql";
import { ChatFileResolverBase } from "./base/chatFile.resolver.base";
import { ChatFile } from "./base/ChatFile";
import { ChatFileService } from "./chatFile.service";

@graphql.Resolver(() => ChatFile)
export class ChatFileResolver extends ChatFileResolverBase {
  constructor(protected readonly service: ChatFileService) {
    super(service);
  }
}
