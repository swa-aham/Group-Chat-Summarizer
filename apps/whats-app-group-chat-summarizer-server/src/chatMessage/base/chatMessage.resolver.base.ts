/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ChatMessage } from "./ChatMessage";
import { ChatMessageCountArgs } from "./ChatMessageCountArgs";
import { ChatMessageFindManyArgs } from "./ChatMessageFindManyArgs";
import { ChatMessageFindUniqueArgs } from "./ChatMessageFindUniqueArgs";
import { CreateChatMessageArgs } from "./CreateChatMessageArgs";
import { UpdateChatMessageArgs } from "./UpdateChatMessageArgs";
import { DeleteChatMessageArgs } from "./DeleteChatMessageArgs";
import { ChatFile } from "../../chatFile/base/ChatFile";
import { ChatMessageService } from "../chatMessage.service";
@graphql.Resolver(() => ChatMessage)
export class ChatMessageResolverBase {
  constructor(protected readonly service: ChatMessageService) {}

  async _chatMessagesMeta(
    @graphql.Args() args: ChatMessageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ChatMessage])
  async chatMessages(
    @graphql.Args() args: ChatMessageFindManyArgs
  ): Promise<ChatMessage[]> {
    return this.service.chatMessages(args);
  }

  @graphql.Query(() => ChatMessage, { nullable: true })
  async chatMessage(
    @graphql.Args() args: ChatMessageFindUniqueArgs
  ): Promise<ChatMessage | null> {
    const result = await this.service.chatMessage(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ChatMessage)
  async createChatMessage(
    @graphql.Args() args: CreateChatMessageArgs
  ): Promise<ChatMessage> {
    return await this.service.createChatMessage({
      ...args,
      data: {
        ...args.data,

        chatFile: args.data.chatFile
          ? {
              connect: args.data.chatFile,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ChatMessage)
  async updateChatMessage(
    @graphql.Args() args: UpdateChatMessageArgs
  ): Promise<ChatMessage | null> {
    try {
      return await this.service.updateChatMessage({
        ...args,
        data: {
          ...args.data,

          chatFile: args.data.chatFile
            ? {
                connect: args.data.chatFile,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ChatMessage)
  async deleteChatMessage(
    @graphql.Args() args: DeleteChatMessageArgs
  ): Promise<ChatMessage | null> {
    try {
      return await this.service.deleteChatMessage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => ChatFile, {
    nullable: true,
    name: "chatFile",
  })
  async getChatFile(
    @graphql.Parent() parent: ChatMessage
  ): Promise<ChatFile | null> {
    const result = await this.service.getChatFile(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
