import * as graphql from "@nestjs/graphql";
import { ChatMessageResolverBase } from "./base/chatMessage.resolver.base";
import { ChatMessage } from "./base/ChatMessage";
import { ChatMessageService } from "./chatMessage.service";

@graphql.Resolver(() => ChatMessage)
export class ChatMessageResolver extends ChatMessageResolverBase {
  constructor(protected readonly service: ChatMessageService) {
    super(service);
  }
}
