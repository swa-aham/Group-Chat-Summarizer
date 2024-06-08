import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatFileServiceBase } from "./base/chatFile.service.base";

@Injectable()
export class ChatFileService extends ChatFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
