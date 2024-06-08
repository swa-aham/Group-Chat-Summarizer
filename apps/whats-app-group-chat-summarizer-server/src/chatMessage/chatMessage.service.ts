import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatMessageServiceBase } from "./base/chatMessage.service.base";

@Injectable()
export class ChatMessageService extends ChatMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
