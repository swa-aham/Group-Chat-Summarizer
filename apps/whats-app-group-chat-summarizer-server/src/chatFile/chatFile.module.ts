import { Module } from "@nestjs/common";
import { ChatFileModuleBase } from "./base/chatFile.module.base";
import { ChatFileService } from "./chatFile.service";
import { ChatFileController } from "./chatFile.controller";
import { ChatFileResolver } from "./chatFile.resolver";

@Module({
  imports: [ChatFileModuleBase],
  controllers: [ChatFileController],
  providers: [ChatFileService, ChatFileResolver],
  exports: [ChatFileService],
})
export class ChatFileModule {}
